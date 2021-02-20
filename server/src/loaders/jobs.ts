import config from '../config';
import Agenda from 'agenda';
import moment from 'moment';
import EmailSequenceJob from '../jobs/emailSequence';
import DailyGenerationJob from '../jobs/dailyGeneration';
import UserRoleChangerJob from '../jobs/changeRole';

/**
 * Reschedules a job upon failure expontentially, each failures creates
 * a bigger interval between calls. Used as to not overload
 *
 */
async function onJobFailureExponential(error: any, job: Agenda.Job<any>) {
  const retryCount = job.attrs.failCount - 1;
  if (retryCount <= config.agenda.maxRetries) {
    job.attrs.nextRunAt = calcExponentialBackoff(retryCount);
    await job.save();
  }
}

/**
 * Reschedules a job constantly, used for job that have to be run.
 * The delay between runs is always 5 minutes
 *
 */
async function onJobFailureConstant(error: any, job: Agenda.Job<any>) {
  const retryCount = job.attrs.failCount - 1;
  if (retryCount <= config.agenda.maxRetries) {
    job.attrs.nextRunAt = moment().add('5', 'minutes').toDate();
    await job.save();
  }
}
function calcExponentialBackoff(retryCount: number): Date {
  const waitInSeconds = Math.pow(retryCount, 4) + 15 + Math.random() * 30 * (retryCount + 1);
  return moment().add(waitInSeconds, 'seconds').toDate();
}

export default ({ agenda }: { agenda: Agenda }) => {
  agenda.define(
    'send-email',
    { priority: 'high', concurrency: config.agenda.concurrency },
    // @TODO Could this be a static method? Would it be better?
    new EmailSequenceJob().handler,
  );

  agenda.define(
    'daily-manga',
    { priority: 'highest', concurrency: config.agenda.concurrency },
    new DailyGenerationJob().handler,
  );

  agenda.define(
    'change-role',
    { priority: 'low', concurrency: config.agenda.concurrency },
    new UserRoleChangerJob().handler,
  );

  agenda.on('fail:daily-manga', onJobFailureConstant);

  agenda.start();
};

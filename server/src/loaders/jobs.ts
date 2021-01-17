import config from '../config';
import EmailSequenceJob from '../jobs/emailSequence';
import Agenda from 'agenda';
import DailyGenerationJob from '../jobs/dailyGeneration';

export default ({ agenda }: { agenda: Agenda }) => {
  agenda.define(
    'send-email',
    { priority: 'high', concurrency: config.agenda.concurrency },
    // @TODO Could this be a static method? Would it be better?
    new EmailSequenceJob().handler,
  );

  agenda.define(
    'daily-manga',
    { priority: 'high', concurrency: config.agenda.concurrency },
    new DailyGenerationJob().handler,
  );

  agenda.start();
};

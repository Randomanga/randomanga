import { Container } from 'typedi';
import MailerService from '../services/mailer';
import { Logger } from 'winston';
import { Job } from 'agenda';

export default class EmailSequenceJob {
  public async handler(job: Job, done: (err?: Error) => void): Promise<void> {
    const Logger: Logger = Container.get('logger');
    try {
      Logger.debug('✌️ Email Sequence Job triggered!');
      const { email }: { [key: string]: string } = job.attrs.data;
      const mailerServiceInstance = Container.get(MailerService);
      await mailerServiceInstance.SendWelcomeEmail(email);
      done();
    } catch (e) {
      Logger.error('🔥 Error with Email Sequence Job: %o', e);
      done(e);
    }
  }
}

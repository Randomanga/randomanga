import { Container } from 'typedi';
import { Logger } from 'winston';
import DailyGeneratorService from '../services/dailyGenerator';
import { Job } from 'agenda';

export default class DailyGenerationJob {
  public async handler(job: Job, done: (err?: Error) => void): Promise<void> {
    const logger: Logger = Container.get('logger');
    try {
      logger.debug('✌️ Daily generation triggered!');
      const generatorService = Container.get(DailyGeneratorService);
      await generatorService.GenerateManga();
      done();
    } catch (e) {
      logger.error('🔥 Error with Daily Generation Job: %o', e);
      done(e);
    }
  }
}

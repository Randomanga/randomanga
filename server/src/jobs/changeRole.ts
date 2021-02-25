import { Job } from 'agenda';
import { Container } from 'typedi';
import { Logger } from 'winston';
import UserService from '../services/user';

export default class UserRoleChangerJob {
  public async handler(job: Job, done: (err?: Error) => void): Promise<void> {
    const Logger: Logger = Container.get('logger');
    try {
      Logger.debug(' User Role Change Job triggered!');
      const { username, role }: { [key: string]: string } = job.attrs.data;
      const userServiceInstance = Container.get(UserService);
      const { status } = await userServiceInstance.ChangeRole(username, role);
      Logger.silly(`Status: ${status}, ${username} is now a ${role}`);
      done();
    } catch (e) {
      Logger.error('🔥 Error with Role Change Job: %o', e);
      done(e);
    }
  }
}

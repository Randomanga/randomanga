import { UsersRepository } from 'Data/Repositories/Users.repository';
import { Request, Response, NextFunction } from 'express';
import { container } from 'Config/DI/Container';
import { captureException } from '@sentry/minimal';

interface AuthOptions {
  noCredentials?: boolean;
  adminOnly?: boolean;
}
/**
 *
 * @param options.noCredentials Allow access without credentials
 * @param options.adminOnly Allow access only to users with admin role
 * @returns middleware to handle authentication with passed parameters
 */
export default function AuthValidate(options: AuthOptions) {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.uid && options.noCredentials) return next();
    if (!req.session.uid) return res.sendStatus(401);
    try {
      const userRepo = container.resolve<UsersRepository>('usersRepository');
      const user = await userRepo.findOneUser(req.session.uid);
      if (!user) return res.sendStatus(401);
      if (options.adminOnly && user.role !== 'admin') {
        return res.sendStatus(401);
      }
      req.user = user.toObject();
      return next();
    } catch (err) {
      captureException(err);
      next(err);
    }
  };
}

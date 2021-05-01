import { UsersRepository } from 'Data/Repositories/Users.repository';
import { Request, Response, NextFunction } from 'express';
import { container } from 'Config/DI/Container';

const AuthCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session.uid) return res.sendStatus(403);
  try {
    const userRepo = container.resolve<UsersRepository>('usersRepository');
    const userRecord = await userRepo.findOneUser(req.session.uid);
    if (!userRecord) return res.sendStatus(401);
    req.user = userRecord.toObject();
    return next();
  } catch (error) {
    return next(error);
  }
};
const AuthNoCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session.uid) return next();
  try {
    const userRepo = container.resolve<UsersRepository>('usersRepository');
    const userRecord = await userRepo.findOneUser(req.session.uid);
    if (!userRecord) return res.sendStatus(401);
    req.user = userRecord.toObject();
    return next();
  } catch (error) {
    return next(error);
  }
};

export { AuthCredentials, AuthNoCredentials };

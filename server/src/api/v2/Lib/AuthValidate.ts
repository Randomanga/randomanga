import { UserRepository } from './../Repository/User.repository';
import { Request, Response, NextFunction } from 'express';

const AuthCredentials = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.uid) return res.sendStatus(403);
  try {
    const userRepo = new UserRepository();
    const userRecord = await userRepo.getUserById(req.session.uid);
    if (!userRecord) return res.sendStatus(401);
    req.currentUser = userRecord.toObject();
    return next();
  } catch (error) {
    return next(error);
  }
};
const AuthNoCredentials = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.uid) return next();
  try {
    const userRepo = new UserRepository();
    const userRecord = await userRepo.getUserById(req.session.uid);
    if (!userRecord) return res.sendStatus(401);
    req.currentUser = userRecord.toObject();
    return next();
  } catch (error) {
    return next(error);
  }
};

export { AuthCredentials, AuthNoCredentials };

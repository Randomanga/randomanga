import { UsersRepository } from 'Data/Repositories/Users.repository';
import { NextFunction, Request, Response } from 'express';
import jwt from 'express-jwt';
import { container } from 'Config/DI/Container';

const attachUserFromIdentity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.token) return res.sendStatus(400);
  try {
    const userRepo = container.resolve<UsersRepository>('usersRepository');
    const userRecord = await userRepo.findOneUser(req.token.id);
    if (!userRecord) return res.sendStatus(400);
    req.user = userRecord;
    next();
  } catch (e) {
    return next(new Error('There was an error validating identity'));
  }
};
const checkForRevoke = (req: Request, res: Response, next: NextFunction) => {
  if (req.query.error) return res.redirect('http://192.168.178.66:3000/');
  return next();
};
const validateJwt = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'token',
  getToken: (req: Request) => {
    if (!req.query.state) return null;
    return req.query.state;
  },
});

export { attachUserFromIdentity, validateJwt, checkForRevoke };

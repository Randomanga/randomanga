import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  /**
   * @TODO Maybe use later to update user data or for refresh tokens?
   */
  route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
    return res.json({ user: req.currentUser }).status(200);
  });

  //AVATAR CRUD
  route.get('/:username/avatar', (req: Request, res: Response) => {
    res.sendStatus(204);
  });
  route.post('/:username/avatar', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
    res.sendStatus(204);
  });
  route.delete('/:username/avatar', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
    res.sendStatus(204);
  });

  


};

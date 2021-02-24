import { Router, Response, NextFunction, Request } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import RandomService from '../../services/randomService';
const route = Router();

export default (app: Router) => {
  app.use('/random-lists', route);

  route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const randomServiceInstance = Container.get(RandomService);
      const listID = await randomServiceInstance.createList(req.body);
      res.json({ listID });
    } catch (err) {
      res.status(502).json({
        errors: {
          message: 'A server error occured while trying to make your random list. ',
        },
      });
    }
  });

  route.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const randomServiceInstance = Container.get(RandomService);
      await randomServiceInstance.getList(1, req.params.id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(404);
    }
  });
};

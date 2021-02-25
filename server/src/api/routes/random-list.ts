import { Router, Response, Request, NextFunction } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import RandomService from '../../services/randomService';

const route = Router();

export default (app: Router) => {
  app.use('/random-lists', route);

  route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    //const logger: Logger = Container.get('logger');
    try {
      const randomServiceInstance = Container.get(RandomService);
      const listID = await randomServiceInstance.createList(req.body);
      res.json({ listID });
    } catch (err) {
      next(err);
    }
  });

  route.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const randomServiceInstance = Container.get(RandomService);
      const list = await randomServiceInstance.getList(2, req.params.id);
      res.json({ list });
    } catch (error) {
      logger.error('%o', error);
      next(error);
    }
  });
};

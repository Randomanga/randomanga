import { Router, Response, Request, NextFunction } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import RandomService from '../../services/randomService';
import { ObjectID } from 'mongodb';

const route = Router();

export default (app: Router) => {
  app.use('/random-lists', route);

  route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const randomServiceInstance = Container.get(RandomService);
      logger.debug('%o', req.body);
      const listID = await randomServiceInstance.createList(req.body);
      res.json({ listID });
    } catch (err) {
      next(err);
    }
  });

  route.get('/:id/:page?', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    try {
      const randomServiceInstance = Container.get(RandomService);
      const data = await randomServiceInstance.getList(Number(req.params.page) || 1, req.params.id);
      res.json(data);
    } catch (error) {
      logger.error('%o', error);
      next(error);
    }
  });
};

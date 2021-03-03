import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import { Logger } from 'winston';
import { Container } from 'typedi';
import MangaService from '../../services/manga';
import { IMangaSearchDTO } from '../../interfaces/IManga';
import { isNumber } from 'lodash';

const route = Router();

export default (app: Router) => {
  app.use('/manga', route);
  route.get(
    '/daily',
    middlewares.isLogged,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      //const logger: Logger = Container.get('logger');
      try {
        const mangaServiceInstance = Container.get(MangaService);
        const manga = await mangaServiceInstance.getRandomDaily(req.currentUser);
        res.json({ manga }).status(200);
      } catch (e) {
        next(e);
      }
    },
  );
  route.get('/:al_id/related', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    logger.silly('Searching for related manga');
    try {
      const mangaServiceInstance = Container.get(MangaService);
      const manga = await mangaServiceInstance.getMangaRelations({
        al_id: Number(req.params.al_id),
      } as IMangaSearchDTO);
      res.json({ manga }).status(200);
    } catch (e) {
      logger.error('🔥 error: %o', e);
      next(e);
    }
  });
  route.get('/:al_id', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    logger.silly(`Searching for manga with id: ${req.params.al_id}`);
    try {
      if (!isNumber(req.params.al_id)) {
        res.status(404).json({
          errors: {
            message: 'Invalid ID provided. Make sure the id is a number and is valid',
          },
        });
      }
      const mangaServiceInstance = Container.get(MangaService);
      const manga = await mangaServiceInstance.getManga({ al_id: Number(req.params.al_id) } as IMangaSearchDTO);

      res.json({ manga }).status(200);
    } catch (e) {
      logger.error('🔥 error: %o', e);
      next(e);
    }
  });
  route.post(
    '/:al_id/likes',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      //const logger: Logger = Container.get('logger');
      //logger.silly(`Invoked like for manga with id: ${req.params.al_id}`);
      try {
        const al_id = Number(req.params.al_id);
        const mangaServiceInstance = Container.get(MangaService);
        await mangaServiceInstance.likeManga({ al_id: al_id }, req.currentUser);
        res.sendStatus(200);
      } catch (e) {
        next(e);
      }
    },
  );
  route.get(
    '/:al_id/likes',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      //const logger: Logger = Container.get('logger');
      try {
        const al_id = Number(req.params.al_id);
        const mangaServiceInstance = Container.get(MangaService);
        const status = await mangaServiceInstance.getLikeStatus({ al_id }, req.currentUser);
        res.json({ like_status: status }).status(200);
      } catch (e) {
        next(e);
      }
    },
  );
  route.delete(
    '/:al_id/likes',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      //const logger: Logger = Container.get('logger');
      //logger.silly(`Invoked unlike for manga with id: ${req.params.al_id}`);
      try {
        const al_id = Number(req.params.al_id);
        const mangaServiceInstance = Container.get(MangaService);
        await mangaServiceInstance.unlikeManga({ al_id: al_id }, req.currentUser);
        res.sendStatus(200);
      } catch (e) {
        next(e);
      }
    },
  );
};

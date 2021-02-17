import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import { Logger } from 'winston';
import { Container } from 'typedi';
import MangaService from '../../services/manga';
import { IMangaSearchDTO } from '../../interfaces/IManga';

const route = Router();

export default (app: Router) => {
  app.use('/manga', route);
  route.get(
    '/daily',
    middlewares.isLogged,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      try {
        const mangaServiceInstance = Container.get(MangaService);
        let manga = await mangaServiceInstance.getRandomDaily();
        if (req.currentUser) {
          const status: Boolean = await mangaServiceInstance.getLikeStatus(manga, req.currentUser);
          manga.likeStatus = status;
        }
        res.json({ manga }).status(200);
      } catch (e) {
        logger.error('error: %o', e);
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
      return next(e);
    }
  });
  route.get('/:al_id', async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get('logger');
    logger.silly(`Searching for manga with id: ${req.params.al_id}`);
    try {
      const mangaServiceInstance = Container.get(MangaService);
      const manga = await mangaServiceInstance.getManga({ al_id: Number(req.params.al_id) } as IMangaSearchDTO);

      res.json({ manga }).status(200);
    } catch (e) {
      logger.error('🔥 error: %o', e);
      return next(e);
    }
  });
};

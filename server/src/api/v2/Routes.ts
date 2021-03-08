import { Router } from 'express';
import AuthRoutes from './Auth/Auth.routes';
import MangaRoutes from './Manga/Manga.routes';
const apiRouter = Router();

apiRouter.use('/auth', AuthRoutes);
apiRouter.use('/manga', MangaRoutes);
export default apiRouter;

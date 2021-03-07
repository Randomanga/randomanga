import { Router } from 'express';
import AuthRoutes from './Auth/Auth.routes';

const apiRouter = Router();

apiRouter.use('/auth', AuthRoutes);

export default apiRouter;

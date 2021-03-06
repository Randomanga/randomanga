import { Router } from 'express';
import authController from '.';
import { CatchExceptions } from '../Lib/CatchExceptions';
import { registerValidator } from './Auth.validators';

const router = Router();

router.post('/', registerValidator, CatchExceptions(authController.store));

export default router;

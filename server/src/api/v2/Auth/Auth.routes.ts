import { Router } from 'express';
import authController from '.';
import { CatchExceptions } from '../Lib/CatchExceptions';
import { registerValidator, loginValidator } from './Auth.validators';

const router = Router();
router.use('/auth', router);

router.post('/signup', registerValidator, CatchExceptions(authController.register));
router.post('/signin', loginValidator, CatchExceptions(authController.login));
export default router;

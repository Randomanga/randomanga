import { Router } from 'express';
import { AuthCredentials, AuthNoCredentials } from '../Lib/AuthValidate';
import { CatchExceptions } from '../Lib/CatchExceptions';
import mangaController from '.';
const router = Router();

router.get('/daily', AuthNoCredentials, CatchExceptions(mangaController.daily));
router.get('/:al_id/related', CatchExceptions(mangaController.related));
router.get('/:al_id/likes', AuthCredentials, CatchExceptions(mangaController.likeStatus));
router.post('/:al_id/likes', AuthCredentials, CatchExceptions(mangaController.like));
router.delete('/:al_id/likes', AuthCredentials, CatchExceptions(mangaController.unlike));

export default router;

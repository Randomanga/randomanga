import Path from 'path';

import { Router as ExpressRouter } from 'express';
import { Browter } from '@donnyroufs/browter';
import { ExpressToBrowterAdapter } from '@donnyroufs/express-to-browter-adapter';
import { createValidator } from 'express-joi-validation';
import { SubscribersValidation } from './Api/Validators/Subscribers.validator';
import AuthValidate from './Lib/AuthValidate';
import {
  attachUserFromIdentity,
  validateJwt,
  checkForRevoke,
} from './Lib/IdentityValidate';

const expressAdapter = new ExpressToBrowterAdapter(ExpressRouter);
const browter = new Browter<ExpressRouter>(expressAdapter, {
  controllersDir: Path.resolve('./src/Web/Api/Controllers'),
});

browter.group('/api', (browter) => {
  browter.group('/auth', (browter) => {
    browter.post('/login', 'AuthController.login');
    browter.post('/register', 'AuthController.register');
    browter.get('/status', 'AuthController.status', [AuthValidate({})]);
  });
  browter.group('/users', (browter) => {});
  browter.group('/manga', (browter) => {
    browter.get('/daily', 'MangaController.daily', [
      AuthValidate({ noCredentials: true }),
    ]);

    browter.get('/:id/likes', 'MangaController.likeStatus', [AuthValidate({})]);
    browter.post('/:id/likes', 'MangaController.like', [AuthValidate({})]);
    browter.delete('/:id/likes', 'MangaController.unlike', [AuthValidate({})]);

    browter.get('/:id/related', 'MangaController.related');
  });
  browter.group('/oauth', (browter) => {
    browter.get('/token', 'UserController.authorizeAniList', [
      checkForRevoke,
      validateJwt,
      attachUserFromIdentity,
    ]);
    browter.get('/identity', 'UserController.alIdentityToken', [
      AuthValidate({}),
    ]);
  });
  browter.group('/random-lists', (browter) => {
    browter.get('/:id/info', 'RandomListController.info');
    browter.get('/:id/:page', 'RandomListController.find');
    browter.post('/', 'RandomListController.create');
  });
});

export default browter.build();

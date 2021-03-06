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
    browter.delete('/logout', 'AuthController.logout', [AuthValidate({})]);
  });
  browter.group('/users', (browter) => {
    // browter.get('/', 'UserController.index', [AuthValidate({})]);
    browter.get('/token', 'UserController.token', [AuthValidate({})]);
    browter.get('/:id', 'UserController.show');
    browter.put('/:id', 'UserController.update', [AuthValidate({})]);
    browter.delete('/:id/alAuth', 'UserController.removeAlToken', [
      AuthValidate({}),
    ]);
    // browter.delete('/:id', 'UserController.destroy', [AuthValidate({})]);
  });
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
  browter.group('/lists', (browter) => {
    browter.get('/', 'ListController.get');
    browter.post('/', 'ListController.create', [AuthValidate({})]);
    browter.get('/:id', 'ListController.find');
    browter.post('/:id/likes', 'ListController.like', [AuthValidate({})]);
    browter.delete('/:id/likes', 'ListController.unlike', [AuthValidate({})]);
    browter.delete('/:id', 'ListController.delete', [AuthValidate({})]);
  });
});

export default browter.build();

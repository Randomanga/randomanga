import Path from 'path';

import { Router as ExpressRouter } from 'express';
import { Browter } from '@donnyroufs/browter';
import { ExpressToBrowterAdapter } from '@donnyroufs/express-to-browter-adapter';
import { createValidator } from 'express-joi-validation';
import { SubscribersValidation } from './Api/Validators/Subscribers.validator';

const expressAdapter = new ExpressToBrowterAdapter(ExpressRouter);
const browter = new Browter<ExpressRouter>(expressAdapter, {
  controllersDir: Path.resolve('./src/Web/Api/Controllers'),
});

browter.group(`/api`, (browter) => {
  browter.group('/auth', (browter) => {
    browter.post('/login', 'AuthController.login');
    browter.post('/register', 'AuthController.register');
  });
  browter.group('/manga', (browter) => {
    browter.get('/daily', 'MangaController.daily');
    browter.get('/:id', 'MangaController.find');
  });
});

export default browter.build();

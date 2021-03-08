import express from 'express';
import cors from 'cors';
import routes from '../api';
import config from '../config';
import { errors } from 'celebrate';
import { NextFunction, Request, Response } from 'express';
import NotFound from '../errors/NotFound';
import HttpException from '../errors/HttpException';
import ServerError from '../errors/ServerError';
import mongoose from 'mongoose';
import session from 'express-session';
import connectStore from 'connect-mongo';
import MongoStore from 'connect-mongo';
export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Some sauce that always add since 2014
  // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
  // Maybe not needed anymore ?
  app.use(require('method-override')());

  app.use(
    session({
      name: 'sid',
      secret: 'cat',
      saveUninitialized: false,
      resave: false,
      store: new MongoStore({
        mongoUrl: config.databaseURL,
        collectionName: 'session',
        ttl: parseInt('1000000') / 1000,
      }),
      cookie: {
        sameSite: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: parseInt('1000000'),
      },
    }),
  );
  // Middleware that transforms the raw string of req.body into json
  app.use(express.json());
  //celebrate error handling
  app.use(errors());
  // Load API routes
  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new HttpException('Not Found!');
    next(err);
  });

  /// error handlers
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res
        .status(403)
        .send({ errors: { message: err.message } })
        .end();
    }
    return next(err);
  });
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) res.status(400);
    if (err instanceof HttpException) res.status(404);
    if (err instanceof NotFound) res.status(404);
    if (err instanceof ServerError) res.status(500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};

import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';

export abstract class Application {
  static PORT = process.env.PORT || 5000;

  protected readonly _server = express();

  constructor() {
    this.run();
  }

  public abstract setup(): Promise<void>;

  private async run() {
    this._server.use(morgan('dev'));
    this._server.use(express.json());
    this._server.use(express.urlencoded({ extended: true }));
    this.initCors();
    this.initSession();

    await this.setup();

    this._server.listen(Application.PORT, this.onSuccessListen.bind(this));
  }
  private initCors() {
    this._server.use(
      cors({
        origin: ['http://192.168.178.66:3000', 'http://localhost:3000'],
        credentials: true,
        preflightContinue: true,
      })
    );
  }
  private initSession() {
    this._server.use(
      session({
        name: 'sid',
        secret: 'cat',
        saveUninitialized: false,
        rolling: true,
        resave: false,
        store: new MongoStore({
          mongoUrl: process.env.DB_URI,
          collectionName: 'session',
          ttl: parseInt('100000000') / 1000,
        }),
        cookie: {
          sameSite: true,
          secure: process.env.NODE_ENV === 'production',
          //expire in one hour
          maxAge: 60 * 60 * 1000,
        },
      })
    );
  }

  private onSuccessListen() {
    console.log(`🔥 Server is running on http://localhost:5000`);
  }
}

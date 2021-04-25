import express from 'express';
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
    this._server.use(cors());
    this._server.use(
      session({
        name: 'sid',
        secret: 'cat',
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({
          mongoUrl: process.env.DB_URI,
          collectionName: 'session',
          ttl: parseInt('1000000') / 1000,
        }),
        cookie: {
          sameSite: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: parseInt('1000000'),
        },
      })
    );

    await this.setup();

    this._server.listen(Application.PORT, this.onSuccessListen.bind(this));
  }

  private onSuccessListen() {
    console.log(`💹 Server is running on http://localhost:5000`);
  }
}

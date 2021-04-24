import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

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
    
    await this.setup();

    this._server.listen(Application.PORT, this.onSuccessListen.bind(this));
  }

  private onSuccessListen() {
    console.log(`💹 Server is running on http://localhost:5000`);
  }
}

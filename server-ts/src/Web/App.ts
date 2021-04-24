import { NextFunction, Request, Response } from 'express';
import { Database } from 'Data/Database';
import { Application } from 'Web/Lib/Application';

import Routes from 'Web/Routes';

class App extends Application {
  // Needed for testing
  get server() {
    return this._server;
  }

  public async setup() {
    if (process.env.NODE_ENV != 'test') {
      await Database.connect();
    }
    await this.registerRoutes();
    this.catchExceptions();
  }
  private async registerRoutes() {
    this._server.use(Routes);
  }
  private catchExceptions() {
    this.server.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.json({
          error: err.message,
        });
      }
    );
  }
}

export default new App();

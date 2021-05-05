import { NextFunction, Request, Response } from 'express';
import { Database } from 'Data/Database';
import { Application } from 'Web/Lib/Application';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import Routes from 'Web/Routes';
import { container } from 'Config/DI/Container';
import { IScheduler } from 'Core/Adapters/IScheduler';
// @ts-expect-error
import agendash from 'agendash';

class App extends Application {
  // Needed for testing
  get server() {
    return this._server;
  }

  public async setup() {
    if (process.env.NODE_ENV != 'test') {
      await Database.connect();
      this.startAgenda();
      await this.initSentry();
    }
    this._server.use(Sentry.Handlers.requestHandler());
    this.server.use(Sentry.Handlers.tracingHandler());
    await this.registerRoutes();
    this.server.use(Sentry.Handlers.errorHandler());
    this.catchExceptions();
  }
  private async registerRoutes() {
    this._server.use(Routes);
  }
  private catchExceptions() {
    this.server.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(400).json({
          error: err.message,
        });
      }
    );
  }
  private async initSentry() {
    Sentry.init({
      dsn:
        'https://8ec227c7c9184f9782e84ce5023786d0@o551277.ingest.sentry.io/5745686',
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.OnUncaughtException(),
        new Sentry.Integrations.OnUnhandledRejection(),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app: this._server }),
      ],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
  }
  private startAgenda() {
    const scheduler = container.resolve<IScheduler>('scheduler');
    this._server.use('/dash', agendash(scheduler.getAgendaInstance()));
    console.log(`🔥 Job dashboard running at: http://localhost:5000/dash`);
  }
}

export default new App();

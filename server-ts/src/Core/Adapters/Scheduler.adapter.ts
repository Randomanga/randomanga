import { IScheduler } from './IScheduler';
import Agenda, { Job, JobPriority } from 'agenda';
import { Database } from 'Data/Database';
import { IDailyMangaHandler } from 'Core/Jobs/DailyManga';
import { captureException } from '@sentry/node';

interface AgendaToSchedulerOptions {
  dailyMangaHandler: IDailyMangaHandler;
}
export enum JobTypes {
  GEN_DAILY = 'generate daily manga',
}
export type JobMap = { JobType: JobTypes.GEN_DAILY; data?: {} | undefined };

export class Scheduler implements IScheduler {
  private readonly _agenda: Agenda;
  private readonly _dailyMangaHandler: IDailyMangaHandler;

  constructor({ dailyMangaHandler }: AgendaToSchedulerOptions) {
    this._dailyMangaHandler = dailyMangaHandler;
    this._agenda = new Agenda({ mongo: Database.getDb() });

    this.setup();
    this.catchExceptions();

    this._agenda.start();

    console.log('🔥 Agenda Started');
  }
  private setup() {
    this._agenda.define(
      'generate daily manga',
      async (job: Job, done: () => void) => {
        this._dailyMangaHandler.generate(job, done);
      }
    );
  }
  public schedule(payload: JobMap & Record<'when', string | Date>) {
    this._agenda.schedule(payload.when, payload.JobType, payload.data);
  }

  private catchExceptions() {
    this._agenda.on('fail', (err: Error, job: Job) => {
      captureException(err);
    });
  }
  /**
   *
   * @returns Current agenda instance, needed for agendash
   */
  public getAgendaInstance() {
    return this._agenda;
  }
}

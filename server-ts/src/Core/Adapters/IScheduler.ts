import Agenda from 'agenda';
import { JobMap } from './Scheduler.adapter';

export interface IScheduler {
  schedule(data: JobMap & Record<'when', string | Date>): void;
  getAgendaInstance(): Agenda;
}

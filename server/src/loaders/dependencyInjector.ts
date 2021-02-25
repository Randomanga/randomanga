import { Container } from 'typedi';
import LoggerInstance from './logger';
import agendaFactory from './agenda';
//import config from '../config';
//import mailgun from 'mailgun-js';

import { Db } from 'mongodb';
import Redis from 'ioredis';

export default async ({ mongoConnection, models }: { mongoConnection: Db; models: { name: string; model: any }[] }) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });

    const agendaInstance = agendaFactory({ mongoConnection });
    const redisClient = new Redis();

    Container.set('agendaInstance', agendaInstance);
    Container.set('logger', LoggerInstance);
    Container.set('redis', redisClient);
    //Container.set('emailClient', mailgun({ apiKey: config.emails.apiKey, domain: config.emails.domain }));

    LoggerInstance.info('✌️ Agenda injected into container');
    LoggerInstance.info('✌️ Redis client connected');

    return { agenda: agendaInstance };
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};

import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config: Options = {
    type: 'postgresql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    highlighter: new SqlHighlighter(),
    debug: true,
    migrations: {
        path: 'dist/migrations',
        pathTs: 'src/migrations',
        disableForeignKeys: false
    },
    seeder: {
        pathTs: 'dist/seeders',
        path: 'src/seeders'
    },

    driverOptions: {
        connection: {
            ssl: true
        }
    }
};

export default config;

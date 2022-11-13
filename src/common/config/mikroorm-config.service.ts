import { IDatabaseDriver, Connection } from '@mikro-orm/core';
import {
    MikroOrmModuleOptions,
    MikroOrmOptionsFactory
} from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '@app/common/config/config.interface';

@Injectable()
export class MikroOrmConfigService implements MikroOrmOptionsFactory {
    constructor(private configServise: ConfigService) {}

    createMikroOrmOptions(
        contextName?: string | undefined
    ): MikroOrmModuleOptions<IDatabaseDriver<Connection>> {
        return {
            contextName,
            entities: ['./dist/entities'],
            entitiesTs: ['./src/entities'],
            type: 'postgresql',
            driver: PostgreSqlDriver,
            ...this.configServise.get<DatabaseConfig>('database')
        };
    }
}

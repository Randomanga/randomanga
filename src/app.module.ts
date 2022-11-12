import {
    MiddlewareConsumer,
    Module,
    NestModule,
    OnModuleInit
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import configuration from '~/common/config/configuration';
import { GQLConfigService } from '~/common/config/gql-config.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MikroOrmConfigService } from '~/common/config/mikroorm-config.service';
import { MangaModule } from './manga/manga.module';
import { MikroORM } from '@mikro-orm/core';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true
        }),
        MikroOrmModule.forRoot(),
        GraphQLModule.forRootAsync({
            driver: ApolloDriver,
            useClass: GQLConfigService
        }),
        MangaModule
    ],
    controllers: [],
    providers: []
})
export class AppModule implements NestModule, OnModuleInit {
    constructor(private readonly orm: MikroORM) {}
    configure(consumer: MiddlewareConsumer) {}

    async onModuleInit() {
        await this.orm.getMigrator().up();
    }
}

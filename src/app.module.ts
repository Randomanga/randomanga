import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import configuration from '@app/common/config/configuration';
import { GQLConfigService } from '@app/common/config/gql-config.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
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
export class AppModule implements OnModuleInit {
    constructor(private readonly orm: MikroORM) {}

    async onModuleInit() {
        await this.orm.getMigrator().up();
    }
}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import configuration from '~/common/config/configuration';
import { GQLConfigService } from '~/common/config/gql-config.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MikroOrmConfigService } from '~/common/config/mikroorm-config.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        GraphQLModule.forRootAsync({
            driver: ApolloDriver,
            useClass: GQLConfigService,
        }),
        MikroOrmModule.forRootAsync({
            inject: [ConfigService],
            imports: [ConfigModule],
            useClass: MikroOrmConfigService,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MangaModule } from './manga/manga.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '@/common/config/configuration';
import { GQLConfigService } from '@/common/services/gql-config.service';

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
    MangaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

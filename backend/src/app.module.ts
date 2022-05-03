import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MangaModule } from './manga/manga.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '@/common/config/configuration';
import { GQLConfigService } from '@/services/gql-config.service';
import { PrismaModule } from 'nestjs-prisma';
import { TagModule } from './tag/tag.module';
import { GenreModule } from './genre/genre.module';

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
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    TagModule,
    GenreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

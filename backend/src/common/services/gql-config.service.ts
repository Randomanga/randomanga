import { GraphQLConfig } from '@/common/config/config.interface';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';

@Injectable()
export class GQLConfigService implements GqlOptionsFactory {
  constructor(private configServise: ConfigService) {}
  createGqlOptions(): ApolloDriverConfig {
    const config = this.configServise.get<GraphQLConfig>('graphql');
    return {
      typePaths: ['./**/**/*.gql', './**/*.graphql'],
      resolvers: { Upload: GraphQLUpload },
      ...config,
    };
  }
}

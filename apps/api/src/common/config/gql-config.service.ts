import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GQLConfigService implements GqlOptionsFactory {
    constructor(private configServise: ConfigService) {}
    createGqlOptions(): ApolloDriverConfig {
        const config = this.configServise.get<ApolloDriverConfig>('apollo');
        return {
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            resolvers: {},
            ...config,
        };
    }
}

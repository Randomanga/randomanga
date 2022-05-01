import { ApolloDriverConfig } from '@nestjs/apollo';

export interface Config {
  nest: NestConfig;
  graphql: GraphQLConfig;
  security: SecurityConfig;
  cors: CORS;
}

export interface NestConfig {
  port: number;
}

export type GraphQLConfig = ApolloDriverConfig;

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}
export interface CORS {
  enabled: boolean;
}

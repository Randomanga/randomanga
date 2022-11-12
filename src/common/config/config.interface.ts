import { ConnectionOptions } from '@mikro-orm/core';
import { ApolloDriverConfig } from '@nestjs/apollo';

export interface Config {
    server: ServerConfig;
    apollo: ApolloDriverConfig;
    security: SecurityConfig;
    database: DatabaseConfig;
}

export interface ServerConfig {
    port: number;
}

export type DatabaseConfig = ConnectionOptions;

export interface SecurityConfig {
    expiresIn: string;
    refreshIn: string;
    bcryptSaltOrRound: string | number;
}

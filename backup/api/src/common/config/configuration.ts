import { Config } from './config.interface';
export default (): Config => ({
  nest: {
    port: Number(process.env.PORT) || 5000,
  },
  graphql: {
    debug: true,
    playground: true,
    autoSchemaFile: 'schema.gql',
    sortSchema: true,
  },
  security: {
    expiresIn: String(process.env.JWT_EXPIRES_AT) || '5min',
    bcryptSaltOrRound: Number(process.env.BCRYPT_SALT_OR_ROUND) || 10,
    refreshIn: String(process.env.JWT_REFRESH_AT) || '30d',
  },
  cors: {
    enabled: false,
  },
});

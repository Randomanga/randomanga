import { Config } from './config.interface';
export default (): Config => ({
    server: {
        port: Number(process.env.PORT) || 5000,
    },
    database: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
    },
    apollo: {
        debug: true,
        playground: true,
        sortSchema: true,
    },
    security: {
        expiresIn: String(process.env.JWT_EXPIRES_AT) || '5min',
        bcryptSaltOrRound: Number(process.env.BCRYPT_SALT_OR_ROUND) || 10,
        refreshIn: String(process.env.JWT_REFRESH_AT) || '30d',
    },
});

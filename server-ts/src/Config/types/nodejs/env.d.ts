declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    DB_URI: string;
    JWT_SECRET: string;
    MAILGUN_KEY: string;
    MAILGUN_DOMAIN: string;
    AGENDASH_USER: string;
    AGENDASH_PASS: string;
  }
}

import session = require('express-session');

declare module 'express-session' {
  interface SessionData {
    uid: string;
  }
}

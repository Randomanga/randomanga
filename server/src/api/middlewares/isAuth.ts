import jwt from 'express-jwt';
import config from '../../config';
import { Request } from 'express';

/**
 * We are assuming that the JWT will come in a header with the form
 *
 * Authorization: Bearer ${JWT}
 *
 * But it could come in a query parameter with the name that you want like
 * GET https://my-bulletproof-api.com/stats?apiKey=${JWT}
 * Luckily this API follow _common sense_ ergo a _good design_ and don't allow that ugly stuff
 */
const getTokenFromHeader = (req: Request) => {
  /**
   * @TODO Edge and Internet Explorer do some weird things with the headers
   * So I believe that this should handle more 'edge' cases ;)
   */
  if (
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};

/**
 * Authorization with required credentials
 *
 * Return 403 if credentials are absent
 */
const isAuth = jwt({
  secret: config.jwtSecret, // The _secret_ to sign the JWTs
  algorithms: [config.jwtAlgorithm], // JWT Algorithm
  userProperty: 'token', // Use req.token to store the JWT
  getToken: getTokenFromHeader, // How to extract the JWT from the request
});

/**
 * Authorization without credentials
 *
 * Attach user to request if he has credentials, if not just continue
 */
const isLogged = jwt({
  secret: config.jwtSecret,
  algorithms: [config.jwtAlgorithm],
  userProperty: 'token',
  getToken: getTokenFromHeader,
  credentialsRequired: false,
});

export { isAuth, isLogged };

import { Request, Response, NextFunction } from 'express';

export const CatchExceptions = (routeHandler: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await routeHandler(req, res);
    } catch (err) {
      // You can use your fancy logger here.
      console.error(err);
      return next(err);
    }
  };
};

import { NextFunction, Request, Response } from 'express';

export const catchAsync = (fn: any, classInstance?: any) => (req: Request, res: Response, next: NextFunction) => {
  if (classInstance) {
    Promise.resolve(fn.call(classInstance, req, res, next)).catch((err) => next(err));
  } else {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  }
};

import { NextFunction, Request, Response } from 'express';
import { verifyJwt } from '../Utils/JWTfunctions';

export default class AuthToken {
  public verifyToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ error: 'Token not found' });

    const decoded = verifyJwt(authorization);
    req.body.user = decoded;
    return next();
  }
}
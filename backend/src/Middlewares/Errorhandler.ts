import { NextFunction, Request, Response } from 'express';
import ErrorHTTP from './Helpers/ErrorHTTP';

class ErrorHandler {
  public static handle(
    error: Error & ErrorHTTP,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    res.status(error.codeHTTP || 500).json({ message: error.message });
  }
}

export default ErrorHandler;
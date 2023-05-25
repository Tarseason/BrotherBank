import HTTPCodes from '../../Utils/HTTPCodes';

class ErrorHTTP extends Error {
  public readonly codeHTTP: HTTPCodes;

  constructor(codeHTTP: number, message: string) {
    super(message);
    this.codeHTTP = codeHTTP;
  }
}

export default ErrorHTTP;
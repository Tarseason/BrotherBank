import JWT, { SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secretoMesmo';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '12d',
};

const createJWT = (payload: any) => 
  JWT.sign(payload, JWT_SECRET, jwtConfig);

export default createJWT;
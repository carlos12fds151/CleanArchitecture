import { JwtPayload } from 'jsonwebtoken';

export interface IJWT {
  token: string | JwtPayload;
}

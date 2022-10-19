import { User } from '../../user/domain/entities/User';
import jwt from 'jsonwebtoken';

export class JWT {
  private readonly _secret: string;

  constructor() {
    this._secret = 'secretekey'; /* process.env.SECRET */
  }

  async sign(payload: User): Promise<string> {
    return jwt.sign(payload, this._secret, { expiresIn: '1days' });
  }
}

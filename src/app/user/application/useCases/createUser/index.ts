import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { ExistUserByUserName } from '../../../domain/services/ExistUserByUserName';
import { UserAlreadyExistsException } from '../../../domain/exceptions/UserAlreadyExistsException';
import { JWT } from '../../../../shared/jwt';

export class CreateUserUseCase {
  private readonly _userRepository: UserRepository;
  private readonly _existUserByUserName: ExistUserByUserName;
  private readonly _jwt: JWT;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
    this._existUserByUserName = new ExistUserByUserName(userRepository);
    this._jwt = new JWT();
  }

  async run(payload: User): Promise<unknown> {
    /* TODO: Crear interfaz de jwt */
    const existUser: boolean = await this._existUserByUserName.run(
      payload.username
    );

    if (existUser) throw new UserAlreadyExistsException();

    const userCreated: User = await this._userRepository.save(payload);

    const token = await this._jwt.sign(userCreated);

    return token;
  }
}

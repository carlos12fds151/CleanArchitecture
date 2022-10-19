import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User';

export class ExistUserByUserName {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async run(payload: User['username']): Promise<boolean> {
    const user = await this._userRepository.getByUserName(payload);

    if (user !== null) return true;

    return false;
  }
}

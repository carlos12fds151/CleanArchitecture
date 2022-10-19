import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';
import { UserNotFoundException } from '../../exceptions/UserNotFoundException';

export class GetUserById {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async run(payload: string): Promise<User> {
    const user = await this._userRepository.getById(payload);

    if (user === null) {
      throw new UserNotFoundException();
    }

    return user;
  }
}

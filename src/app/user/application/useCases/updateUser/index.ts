import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

export class UpdateUserUseCase {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async run(payload: User): Promise<User> {
    const { id, age, name, username } = payload;

    const dataToUpdate: User = {
      id,
      age,
      name,
      username
    };

    const userUpdated: User = await this._userRepository.update(dataToUpdate);
    return userUpdated;
  }
}

import { UserRepository } from '../../../domain/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

export class DeleteUserUseCase {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async run(payload: User): Promise<User | null> {
    return await this._userRepository.delete(payload);
  }
}

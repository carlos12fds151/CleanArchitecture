import { UserModel } from '../../../../../drivenAdapters/PlanetScale/entities/user.model';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

export class UserRepositoryDB implements UserRepository {
  async getAll(): Promise<User[]> {
    const records = await UserModel.findAll();
    return records;
  }

  async save(payload: User): Promise<User> {
    await UserModel.create(payload);
    return payload;
  }

  async getByUserName(payload: string): Promise<User | null> {
    //   const userFound = this.userData.find((x) => x.username === payload);

    //   if (userFound === undefined) return null;

    return null;
  }

  async update(payload: User): Promise<User> {
    //   const users = this.userData.filter((x) => x.id !== payload.id);
    //   users.push(payload);
    //   this.userData = users;
    return payload;
  }

  async delete(payload: User): Promise<User | null> {
    //   const users = this.userData.filter((x) => x.id !== payload.id);
    //   this.userData = users;
    return payload;
  }

  async getById(payload: string): Promise<User | null> {
    const userFound = await UserModel.findByPk(payload);

    if (userFound === undefined) return null;

    return userFound;
  }
}

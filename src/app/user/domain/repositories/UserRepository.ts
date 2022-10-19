import { User } from '../entities/User';

export interface UserRepository {
  getAll: () => Promise<User[]>;
  save: (payload: User) => Promise<User>;
  getByUserName: (payload: string) => Promise<User | null>;
  update: (payload: User) => Promise<User>;
  getById: (payload: string) => Promise<User | null>;
  delete: (payload: User) => Promise<User | null>;
}

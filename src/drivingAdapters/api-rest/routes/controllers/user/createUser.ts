import { v4 as uuidv4 } from 'uuid';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../../../../app/user/domain/entities/User';
import { CreateUserUseCase } from '../../../../../app/user/application/useCases/createUser';
import { UserRepositoryDB } from '../../../../../app/user/infrastructure/implementations/PlanetScale/userRepositoryDB';
import { NORMAL } from '../../../../../app/shared/contants';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, age, name, password } = req.body;
    const inMemoryUserRepository = new UserRepositoryDB();
    const createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
    const userToCreate: User = {
      id: uuidv4(),
      name,
      username,
      age,
      password,
      rol: NORMAL
    };

    const userCreated = await createUserUseCase.run(userToCreate);
    res.json(userCreated);
  } catch (e) {
    return next(e);
  }
};

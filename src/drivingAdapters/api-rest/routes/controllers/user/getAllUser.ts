import { Request, Response, NextFunction } from 'express';
import { UserRepositoryDB } from '../../../../../app/user/infrastructure/implementations/PlanetScale/userRepositoryDB';
import { GetAllUserUseCase } from '../../../../../app/user/application/useCases/getAllUser';

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userRepositoryDB = new UserRepositoryDB();
    const getAllUser = new GetAllUserUseCase(userRepositoryDB);
    const dataset = await getAllUser.run();
    res.json(dataset);
  } catch (e) {
    return next(e);
  }
};

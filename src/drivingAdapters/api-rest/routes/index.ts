import { UserAlreadyExistsException } from '../../../app/user/domain/exceptions/UserAlreadyExistsException';
import { UserNotFoundException } from '../../../app/user/domain/exceptions/UserNotFoundException';
import { Request, Response, NextFunction, Router } from 'express';
import userRoutes from './user.routes';

const route = Router();

route.use('/users', userRoutes);

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof UserAlreadyExistsException) {
    res.status(400).json({
      message: 'El usuario ya ha sido registrado'
    });
  } else if (err instanceof UserNotFoundException) {
    res.status(400).json({
      message: 'El usuario no existe'
    });
  } else {
    next(err);
  }
});

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500);
  res.json({ error: 'Server Error', err });
});

export default route;

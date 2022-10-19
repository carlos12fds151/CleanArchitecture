/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { createUser } from './controllers/user/createUser';
import { getAllUser } from './controllers/user/getAllUser';

const route = Router();

route.get('', getAllUser);
route.post('', createUser);
// route.delete(':id', deleteUserController)
// route.put('/:id', updateUserController)

export default route;

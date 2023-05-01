import {Router} from 'express';
import UserController from '../Controllers/UserController'

const router = Router();
const PATH_USER = 'user';

router.post(
  PATH_USER,
  (req, res, next) => new UserController(req, res, next).create(),
);

export default router;
import { Router } from 'express';
import UserController from '../Controllers/UserController';

const router = Router();
const PATH_USER = '/user';

router.post(
  PATH_USER,
  (req, res, next) => new UserController(req, res, next).create(),
);

router.get(
  PATH_USER,
  (req, res, next) => new UserController(req, res, next).getAllUsers(),
);

router.put(
  `${PATH_USER}/:id`,
  (req, res, next) => new UserController(req, res, next).updateUser(),
);

router.post(
  `${PATH_USER}/transaction`,
  (req, res, next) => new UserController(req, res, next).balanceMoneyUser(),
);

router.get(
  `${PATH_USER}/transaction`,
  (req, res, next) => new UserController(req, res, next).getAllTransaction(),
);

router.post(
  `${PATH_USER}/find`,
  (req, res, next) => new UserController(req, res, next).getById(),
);

export default router;

import { Router } from 'express';
import UserController from '../Controllers/UserController';
import AuthToken from '../Middlewares/JWT';

const router = Router();
const Jwt = new AuthToken();
const PATH_USER = '/user';

router.post(
  PATH_USER,
  (req, res, next) => new UserController(req, res, next).create(),
);

router.get(
  PATH_USER,
  (req, res, next) => Jwt.verifyToken(req, res, next),
  (req, res, next) => new UserController(req, res, next).getAllUsers(),
);

router.get(
  `${PATH_USER}/:id`,
  (req, res, next) => new UserController(req, res, next).getById(),
);

router.put(
  `${PATH_USER}/:id`,
  (req, res, next) => new UserController(req, res, next).updateUser(),
);

router.delete(
  `${PATH_USER}/:id`,
  (req, res, next) => new UserController(req, res, next).deleteUser(),  
);

router.post(
  ('/login'),
  (req, res, next) => new UserController(req, res, next).login(),
);

export default router;

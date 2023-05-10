import { Router } from 'express';
import FavorController from '../Controllers/FavorController';

const router = Router();

router.post(
  '/favor',
  (req, res, next) => new FavorController(req, res, next).create(),
);

router.post(
  '/favor/get',
  (req, res, next) => new FavorController(req, res, next).getFavor(),
);

export default router;
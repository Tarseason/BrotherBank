import { Router } from 'express';
import FavorController from '../Controllers/FavorController';

const router = Router();

router.post(
  '/favor/type',
  (req, res, next) => new FavorController(req, res, next).create(),
);
router.post(
  '/favor',
  (req, res, next) => new FavorController(req, res, next).create(),
);

export default router;
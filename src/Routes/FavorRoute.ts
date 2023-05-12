import { Router } from 'express';
import FavorController from '../Controllers/FavorController';

const router = Router();

router.post(
  '/favor',
  (req, res, next) => new FavorController(req, res, next).create(),
);

router.get(
  '/favor/global',
  (req, res, next) => new FavorController(req, res, next).getGlobalFavors(),
);

router.get(
  '/favor/direct/:id',
  (req, res, next) => new FavorController(req, res, next).getDirectFavors(),
);

export default router;
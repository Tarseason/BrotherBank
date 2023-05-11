import { Router } from 'express';
import FavorController from '../Controllers/FavorController';

const router = Router();

router.post(
  '/favor',
  (req, res, next) => new FavorController(req, res, next).create(),
);

router.get(
  '/favor',
  (req, res, next) => new FavorController(req, res, next).getAllFavors(),
);

router.get(
  '/favor/direct/:id',
  (req, res, next) => new FavorController(req, res, next).getDirectFavors(),
);

router.get(
  '/favor/global',
  (req, res, next) => new FavorController(req, res, next).getGlobalFavors(),
);

// ID de quem aceitou vai no parametro
router.post(
  '/favor/global/accept/:id',
  (req, res, next) => new FavorController(req, res, next).acceptGlobalFavor(),
);

export default router;
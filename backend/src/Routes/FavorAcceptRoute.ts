import { Router } from 'express';
import FavorAcceptedController from '../Controllers/FavorAcceptController';

const router = Router();

router.post(
  '/favor/accept/:id',
  (req, res, next) => new FavorAcceptedController(req, res, next).acceptGlobalFavor(),
);

router.post(
  '/favor/direct/accept/:id',
  (req, res, next) => new FavorAcceptedController(req, res, next).acceptDirectFavor(),
);

router.get(
  '/favor/accept/:id',
  (req, res, next) => new FavorAcceptedController(req, res, next).getAcceptFavors(),
);

export default router;
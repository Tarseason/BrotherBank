import { Router } from 'express';
import FavorConcludedController from '../Controllers/FavorConcludedController';

const router = Router();

router.post(
  '/favor/concluded',
  (req, res, next) => new FavorConcludedController(req, res, next).concludeFavor(),
);

router.get(
  '/favor/concluded/:id',
  (req, res, next) => new FavorConcludedController(req, res, next).getAllConcluded(),
);

export default router;
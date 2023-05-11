import { Router } from 'express';
import TransactionController from '../Controllers/TransactionController';

const router = Router();

router.post(
  '/transaction',
  (req, res, next) => new TransactionController(req, res, next).transactionCreate(),
);

router.get(
  '/transaction',
  (req, res, next) => new TransactionController(req, res, next).getAllTransaction(),
);

export default router;
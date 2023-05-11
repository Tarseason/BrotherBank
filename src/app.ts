import express from 'express';
import ErrorHandler from './Middlewares/Errorhandler';
import UserRouter from './Routes/UserRoutes';
import TransactionRoute from './Routes/TransactionRoute';
import FavorRouter from './Routes/FavorRoute';

const app = express();
app.use(express.json());
app.use(UserRouter);
app.use(FavorRouter);
app.use(TransactionRoute);
app.use(ErrorHandler.handle);

export default app;
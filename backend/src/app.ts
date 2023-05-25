import express from 'express';
import ErrorHandler from './Middlewares/Errorhandler';
import UserRouter from './Routes/UserRoutes';
import TransactionRoute from './Routes/TransactionRoute';
import FavorRouter from './Routes/FavorRoute';
import FavorAcceptRoute from './Routes/FavorAcceptRoute';
import FavorConcludedRouter from './Routes/FavorConcludedRoute';

const app = express();
app.use(express.json());
app.use(UserRouter);
app.use(FavorRouter);
app.use(TransactionRoute);
app.use(FavorAcceptRoute);
app.use(FavorConcludedRouter);
app.use(ErrorHandler.handle);

export default app;
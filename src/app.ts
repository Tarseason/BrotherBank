import express from 'express';
import ErrorHandler from './Middlewares/Errorhandler';
import UserRouter from './Routes/UserRoutes';
import FavorRouter from './Routes/FavorRoute';

const app = express();
app.use(express.json());
app.use(UserRouter);
app.use(FavorRouter);
app.use(ErrorHandler.handle);

export default app;
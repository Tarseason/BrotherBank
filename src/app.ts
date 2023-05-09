import express from 'express';
import ErrorHandler from './Middlewares/Errorhandler';
import UserRouter from './Routes/UserRoutes';

const app = express();
app.use(express.json());
app.use(UserRouter);
app.use(ErrorHandler.handle);

export default app;
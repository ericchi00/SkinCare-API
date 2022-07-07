import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import logger from 'morgan';
import apiRouter from './routes/api';
import { errorConverter, errorHandler } from './middleware/error';
import rateLimiter from './middleware/rateLimit';

const app = express();

app.use(logger('dev'));

app.use(helmet());

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression());
app.options('*', cors);
app.use(rateLimiter);
app.use('/', apiRouter);

app.use(errorConverter);
app.use(errorHandler);

export default app;

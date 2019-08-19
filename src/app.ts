import helmet from 'helmet';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jsend from 'jsend';
import routes from './routes';
const statusMonitor = require('express-status-monitor')();

const app = express();

app.use(helmet({}));
app.use(cors());
app.use(cookieParser());
app.use(jsend.middleware);
app.use(statusMonitor);
routes(app);

export default app;

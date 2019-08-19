import helmet from 'helmet';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jsend from 'jsend';
import routes from './routes';
const statusMonitor = require('express-status-monitor')();
import dotenv from 'dotenv';
import {isEnableMonitoring} from './commons/env';
import RateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

app.use(helmet({}));
app.use(cors());
app.use(cookieParser());
app.use(jsend.middleware);
app.use(
	new RateLimit({
		windowMs: 15 * 60 * 1000,
		max: 2000
	})
);

if (isEnableMonitoring()) {
	app.use(statusMonitor);
}
routes(app);

export default app;

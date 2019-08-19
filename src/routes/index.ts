import demoRoute from './demoRoute';
import {Express, Request, Response} from 'express';
import RateLimit from 'express-rate-limit';
import logger from '../commons/logger';
const statusMonitor = require('express-status-monitor')();

const limiter = new RateLimit({
	windowMs: 15 * 60 * 1000, // 15 min timeframe
	max: 2000, // max-requests
	delayMs: 0
});

export default (app: Express) => {
	app.use(limiter);

	app.use('/demo', demoRoute);

	app.get('/_monitor', statusMonitor.pageRoute);
	app.get('/', (req, res: Response) => {
		res.jsend.success('ok');
	});

	app.use('*', (req, res: Response) => {
		logger.error('accessing invalid route');
		res.jsend.error('invalid route');
	});
};

import demoRoute from './demoRoute';
import {Express, Request, Response} from 'express';
import RateLimit from 'express-rate-limit';

const limiter = new RateLimit({
	windowMs: 15 * 60 * 1000, // 15 min timeframe
	max: 100, // max-requests
	delayMs: 0
});

export default (app: Express) => {
	app.use('/demo', demoRoute);

	app.get('/', (req: Request, res: Response) => {
		res.jsend.success('ok');
	});
};

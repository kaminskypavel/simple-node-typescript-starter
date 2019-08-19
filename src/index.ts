import helmet from 'helmet';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import RateLimit from 'express-rate-limit';
import chalk from 'chalk';
import jsend from 'jsend';

dotenv.config();
const app = express();

app.use(helmet({}));

const limiter = new RateLimit({
	windowMs: 15 * 60 * 1000, // 15 min timeframe
	max: 100, // max-requests
	delayMs: 0
});

app.use(cors());
app.use(cookieParser());
app.use(jsend.middleware);

app.use('/', (req, res) => {
	res.jsend.success('ok');
});

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`simple-node-typescript-starter server is running`);
	console.log(`navigate to http://localhost:${port}`);
	console.log(chalk.yellow(`Please remember to rewise security`));
});

import helmet from 'helmet';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import jsend from 'jsend';
import routes from './routes';
const statusMonitor = require('express-status-monitor')();

dotenv.config();
const app = express();

app.use(helmet({}));
app.use(cors());
app.use(cookieParser());
app.use(jsend.middleware);
app.use(statusMonitor);

routes(app);

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`simple-node-typescript-starter server is running`);
	console.log(`navigate to http://localhost:${port}`);
	console.log(chalk.yellow(`Please remember to rewise security and disable /_monitor route`));
});

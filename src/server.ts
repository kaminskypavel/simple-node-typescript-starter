import app from './app';
import chalk from 'chalk';
import dotenv from 'dotenv';
import logger from './commons/logger';

dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
	logger.info(`simple-node-typescript-starter server is running`);
	logger.info(`navigate to http://localhost:${port}`);
	logger.warn(chalk.bgYellow(`Please remember to rewise security and protect /_monitor route`));
});

import app from './app';
import chalk from 'chalk';

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`simple-node-typescript-starter server is running`);
	console.log(`navigate to http://localhost:${port}`);
	console.log(chalk.yellow(`Please remember to rewise security and disable /_monitor route`));
});

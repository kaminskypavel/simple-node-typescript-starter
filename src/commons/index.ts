// Built With ♡ 'PK' (www.pavel-kaminsky.com)
// All Rights Reserved.

// tslint:disable:no-var-requires
require('es6-promise').polyfill();
require('isomorphic-fetch');

import chalk, {Chalk} from "chalk";
import * as moment from "moment";

process.env = process.env || 'development';

export const isDevelopment = (): boolean => {
	return process.env.NODE_ENV === 'development';
};

export const log = (msg: any, color?: Chalk) =>
	console.log(`[${chalk.yellow.bold(moment().format('DD-MM-YY h:mm:ss'))}]`,
		(color || chalk.blue.bold)(JSON.stringify(msg)));

export const debug = (msg: any, color?: Chalk) => {
	if (isDevelopment()) {
		console.log(`[${chalk.yellow.bold(moment().format('DD-MM-YY h:mm:ss'))}]`, (color || chalk.greenBright.bold)(JSON.stringify(msg)));
	}
};

export const error = (msg: any, err: Error = new Error(), color?: Chalk) =>
	console.log(`[${chalk.red(moment().format('DD-MM-YY h:mm:ss'))}]`,
		(color || chalk.red)(msg), (color || chalk.red)(err.toString()));

import winston from 'winston';
import {isProduction} from './env';

const simpleFormat = winston.format.printf((info) => `[${new Date().toISOString()}] ${info.level}: ${info.message}`);
const jsonFormat = winston.format.combine(
	winston.format.timestamp({
		format: 'YYYY-MM-DD HH:mm:ss'
	}),
	winston.format.json()
);

const logger = winston.createLogger({
	level: 'info',
	format: simpleFormat,
	transports: [
		//
		// - Write to all logs with level `info` and below to `combined.log`
		// - Write all logs error (and below) to `error.log`.
		//
		new winston.transports.File({filename: 'combined.log'})
	]
});

if (!isProduction()) {
	logger.add(
		new winston.transports.Console({
			format: simpleFormat
		})
	);
}

export default logger;

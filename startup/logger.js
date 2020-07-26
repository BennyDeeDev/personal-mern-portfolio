const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint, colorize, json, simple } = format;
// require('winston-mongodb');

/* module.exports = function () {
	winston.exceptions.handle()(
		new winston.transports.Console({ colorize: true, prettyPrint: true }),
		new winston.transports.File({ filename: "/logs/uncaughtExceptions.log" })
	);

	process.on("unhandledRejection", (ex) => {
		throw ex;
	});

	winston.add(winston.transports.File, { filename: "/logs/logfile.log" });
	// winston.add(winston.transports.MongoDB, {
	//   db: 'mongodb://localhost/vidly',
	//   level: 'info'
	// });
};
 */

const logger = createLogger({
	transports: [
		new transports.Console({ format: combine(colorize(), simple(), timestamp(), prettyPrint(), json()) }),
		new transports.File({ filename: "./logs/error.log", level: "error" }),
	],
});

logger.exceptions.handle(new transports.File({ filename: "exceptions.log" }));

module.exports = logger;

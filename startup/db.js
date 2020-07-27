const logger = require("./logger");
const mongoose = require("mongoose");
const { db } = require("../config/config");

module.exports = function () {
	mongoose
		.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => logger.info(`Connected to ${db}...`));
};

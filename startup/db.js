const winston = require("winston");
const mongoose = require("mongoose");
const { db } = require("../config/config");

module.exports = function () {
	mongoose
		.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => winston.info(`Connected to ${db}...`));
};

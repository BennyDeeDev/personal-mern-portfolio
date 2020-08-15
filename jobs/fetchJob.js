var CronJob = require("cron").CronJob;
const fetchUdemy = require("./fetchUdemy");
const fetchCodeWars = require("./fetchCodeWars");

var job = new CronJob("0 * * * *", function () {
	fetchUdemy();
	fetchCodeWars();
});

module.exports = job;

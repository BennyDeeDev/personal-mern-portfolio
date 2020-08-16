var CronJob = require("cron").CronJob;
const fetchUdemy = require("./fetchUdemy");
const fetchCodeWars = require("./fetchCodeWars");

var job = new CronJob("* * * * *", function () {
	fetchUdemy();
	fetchCodeWars();
});

module.exports = job;

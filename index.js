const express = require("express");
const app = express();
const logger = require("./startup/logger");
const { port } = require("./config/config");

/* require("./startup/cors")(app); */
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
/* require("./startup/validation")(); */

const server = app.listen(port, () => logger.info(`Listening on port ${port}...`));

module.exports = server;

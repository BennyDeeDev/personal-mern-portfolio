const fs = require("fs");
var privateKEY = fs.readFileSync("./jwtRS256.key", "utf8");
var publicKEY = fs.readFileSync("./jwtRS256.key.pub", "utf8");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	port: process.env.PORT,
	privateKEY,
	publicKEY,
};

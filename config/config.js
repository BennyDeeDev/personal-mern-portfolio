const fs = require("fs");
const privateKEY = fs.readFileSync("./jwtRS256.key", "utf8");
const publicKEY = fs.readFileSync("./jwtRS256.key.pub", "utf8");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	port: process.env.PORT,
	db: process.env.DB,
	privateKEY,
	publicKEY,
	udemy_api_key: process.env.UDEMY_API_KEY,
	codewars_api_key: process.env.CODEWARS_API_KEY,
};

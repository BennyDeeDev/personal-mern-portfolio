const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	port: process.env.PORT,
	db: process.env.DB_PROD,
	udemy_api_key: process.env.UDEMY_API_KEY,
	codewars_api_key: process.env.CODEWARS_API_KEY,
	gmail_email: process.env.GMAIL_EMAIL,
	gmail_password: process.env.GMAIL_PASSWORD,
};

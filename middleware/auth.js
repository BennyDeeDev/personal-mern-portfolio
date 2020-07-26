const jwt = require("jsonwebtoken");
const { privateKEY } = require("../config/config");

module.exports = function (req, res, next) {
	console.log("auth");
	const token = req.header("x-auth-token");
	if (!token) return res.status(401).send("Access denied. No token provided.");
	console.log(privateKEY, token);
	try {
		const decoded = jwt.verify(token, privateKEY);
		req.user = decoded;
		next();
	} catch (ex) {
		console.log(ex, "error");
		res.status(400).send("Invalid token.");
	}
};

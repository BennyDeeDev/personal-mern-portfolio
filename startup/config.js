const { privateKEY } = require("../config/config");

module.exports = function () {
	if (!privateKEY) {
		throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
	}
};

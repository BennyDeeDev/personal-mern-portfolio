const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { privateKEY } = require("../config/config");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024,
	},
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{
			_id: this._id,
			email: this.email,
		},
		privateKEY
	);
	return token;
};

module.exports = mongoose.model("User", userSchema);

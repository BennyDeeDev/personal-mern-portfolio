const mongoose = require("mongoose");

const UdemySchema = new mongoose.Schema({
	courses: {
		type: Array,
		required: true,
	},
});

exports.UdemySchema = UdemySchema;
exports.Udemy = mongoose.model("Udemy", UdemySchema);

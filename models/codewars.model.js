const mongoose = require("mongoose");

const CodeWarsSchema = new mongoose.Schema({
	challenges: {
		type: Array,
		required: true,
	},
});

exports.CodeWarsSchema = CodeWarsSchema;
exports.CodeWars = mongoose.model("CodeWars", CodeWarsSchema);

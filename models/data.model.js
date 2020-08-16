const mongoose = require("mongoose");

const { CvSchema } = require("./cv.model");
const { StrengthSchema } = require("./strength.model");
const { SkillSchema } = require("./skill.model");

const UserDataSchema = new mongoose.Schema({
	skills: {
		type: Array,
		type: [SkillSchema],
	},
	strengths: {
		type: Array,
		type: [StrengthSchema],
	},
	work: {
		type: Array,
		type: [CvSchema],
	},
	education: {
		type: Array,
		type: [CvSchema],
	},
});

module.exports = mongoose.model("Data", UserDataSchema);

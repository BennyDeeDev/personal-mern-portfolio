const mongoose = require("mongoose");
const { db } = require("./config");

const connectDB = async () => {
	/* return mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }); */
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB Connected...");
	} catch (err) {
		console.error(err.message);

		process.exit(1);
	}
};

module.exports = connectDB;

const express = require("express");
const app = express();
var cors = require("cors");
/* const logger = require("./startup/logger"); */

const { port } = require("./config/config");
const connectDB = require("./config/db");

const udemy = require("./routes/udemy");
const codewars = require("./routes/codewars");

const contact = require("./routes/contact");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user/udemy", udemy);
app.use("/api/user/codewars", codewars);
app.use("/api/contact", contact);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile("./client/build/index.html");
	});
}

connectDB();
app.listen(port, () => console.log(`REST API on http://localhost:${port}/api`));

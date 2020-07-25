const express = require("express");
const mongoose = require("mongoose");
const app = express();

const strengths = require("./routes/strengths");
const skills = require("./routes/skills");

mongoose
	.connect("mongodb://localhost/personal-mern-portfolio", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/strengths", strengths);
app.use("/api/skills", skills);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

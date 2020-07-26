const express = require("express");
const mongoose = require("mongoose");
const app = express();

const strengths = require("./routes/strengths");
const skills = require("./routes/skills");
const cv = require("./routes/cv");
const links = require("./routes/links");
const user = require("./routes/user");

const { port } = require("./config/config");

mongoose
	.connect("mongodb://localhost/personal-mern-portfolio", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/strengths", strengths);
app.use("/api/skills", skills);
app.use("/api/cv", cv);
app.use("/api/links", links);
app.use("/api/user", user);

app.listen(port, () => console.log(`Listening on port ${port}...`));

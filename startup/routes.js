const express = require("express");

const strengths = require("../routes/strengths");
const skills = require("../routes/skills");
const cv = require("../routes/cv");
const links = require("../routes/links");
const user = require("../routes/user");
const upload = require("../routes/upload");

module.exports = function (app) {
	app.use(express.json());
	app.use("/api/strengths", strengths);
	app.use("/api/skills", skills);
	app.use("/api/cv", cv);
	app.use("/api/links", links);
	app.use("/api/user", user);
	app.use("/api/upload", upload);
};

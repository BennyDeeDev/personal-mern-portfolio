const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { check, body, validationResult, custom } = require("express-validator");
const { gmail_email, gmail_password } = require("../config/config");

router.post("/", (req, res) => {
	const smtpTrans = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: gmail_email,
			pass: gmail_password,
		},
	});

	const mailOpts = {
		from: req.body.email,
		to: gmail_email,
		subject: req.body.subject || "Contact form at benjaminderksen.netlify.app",
		text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
	};

	// Attempt to send the email
	smtpTrans.sendMail(mailOpts, (error, response) => {
		if (error) {
			console.log(error);
			res.status(500).json("Server Error");
		} else {
			res.send("Success");
		}
	});
});

module.exports = router;

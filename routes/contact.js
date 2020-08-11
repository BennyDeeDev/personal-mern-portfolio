const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { check, body, validationResult, custom } = require("express-validator");
const { gmail_email, gmail_password } = require("../config/config");

// POST route from contact form
router.post("/", (req, res) => {
	console.log(req.body);
	console.log(req.body.name);
	// Instantiate the SMTP server
	const smtpTrans = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: gmail_email,
			pass: gmail_password,
		},
	});

	// Specify what the email will look like
	const mailOpts = {
		from: "Your sender info here", // This is ignored by Gmail
		to: gmail_email,
		subject: "New message from contact form at benjaminderksen.netlify.app",
		text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
	};

	// Attempt to send the email
	smtpTrans.sendMail(mailOpts, (error, response) => {
		if (error) {
			res.send("contact-failure"); // Show a page indicating failure
		} else {
			res.send("contact-success"); // Show a page indicating success
		}
	});
});

module.exports = router;

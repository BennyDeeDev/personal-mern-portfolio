const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const { gmail_email, gmail_password } = require("../config/config");

const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 3,
	message: "Too many emails created from this IP, please try again after an hour",
});

router.post("/", contactLimiter, (req, res) => {
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

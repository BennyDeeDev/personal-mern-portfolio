const express = require("express");
const router = express.Router();
const { check, body, validationResult } = require("express-validator");

/* {
  id: 1,
  headline: "Effizient",
  svg: optimization,
  caption: "Nicht nur Webseiten sollten effizient sein",
},
{
  id: 2,
  headline: "Minimalistisch",
  svg: smartphone,
  caption: "Nur das implementieren was Wert hat",
},
{
  id: 3,
  headline: "Anpassbar",
  svg: atom,
  caption: "Intelligenz ist die Fähigkeit sich anzupassen",
}, */

let strengths = [{ headline: "" }];

router.get("/", async (req, res) => {
	res.send(strengths);
});

router.post(
	"/",
	[
		check("headline")
			.notEmpty()
			.withMessage("headline is required")
			.isString()
			.withMessage("headline must be string"),
		check("caption").isString()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.send(strengths);
	}
);

module.exports = router;

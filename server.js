const express = require("express");
const app = express();
/* const logger = require("./startup/logger"); */
const { port } = require("./config/config");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const links = require("./routes/links");
const user = require("./routes/user");
const data = require("./routes/data");
const upload = require("./routes/upload");
const auth = require("./routes/auth");
const udemy = require("./routes/udemy");
const codewars = require("./routes/codewars");

const contact = require("./routes/contact");

/* app.use(cors()); */
app.use(express.json());
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", user);
app.use("/api/user/links", links);
app.use("/api/user/data", data);
app.use("/api/user/upload", upload);
app.use("/api/user/auth", auth);
app.use("/api/user/udemy", udemy);
app.use("/api/user/codewars", codewars);
app.use("/api/contact", contact);

connectDB();
app.listen(port, () => console.log(`REST API on http://localhost:${port}/api`));

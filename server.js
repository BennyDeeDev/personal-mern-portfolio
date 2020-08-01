const express = require("express");
const app = express();
/* const logger = require("./startup/logger"); */
const { port } = require("./config/config");
const connectDB = require("./config/db");

const links = require("./routes/links");
const user = require("./routes/user");
const data = require("./routes/data");
const upload = require("./routes/upload");
const auth = require("./routes/auth");

/* app.use(cors()); */

app.use(express.json());
app.use("/api/user", user);
app.use("/api/user/links", links);
app.use("/api/user/data", data);
app.use("/api/user/upload", upload);
app.use("/api/user/auth", auth);

connectDB();
app.listen(port, () => console.log(`REST API on http://localhost:${port}/api`));

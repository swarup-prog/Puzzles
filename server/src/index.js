require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const connection = require("./db");

const registerRoutes = require("./routes/authentication/register.js");
const loginRoutes = require("./routes/authentication/login.js");

connection();

const app = express();

//Middlewares
app.use(helmet());
app.use(express.json());

//routes
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);

app.listen(8000, () => {
  console.log("listening on port 8000");
});

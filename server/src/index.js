require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const connection = require("./db");
const cors = require("cors");

const registerRoutes = require("./routes/authentication/register.js");
const loginRoutes = require("./routes/authentication/login.js");
const getUserRoutes = require("./routes/userRoutes/getUser.js");
const addProductRoutes = require("./routes/productRoutes/addProduct.js");

connection();

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionSuccessStatus: 204,
};

//Middlewares
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/user", getUserRoutes);
app.use("/api/addProduct", addProductRoutes);

app.listen(8000, () => {
  console.log("listening on port 8000");
});

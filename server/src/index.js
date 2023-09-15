require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const connection = require("./db");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const registerRoutes = require("./routes/authentication/register.js");
const loginRoutes = require("./routes/authentication/login.js");
const getUserRoutes = require("./routes/userRoutes/getUser.js");
const cloudinaryRoute = require("./routes/cloudinary.js");
const addProductRoutes = require("./routes/productRoutes/addProduct.js");
const createPostRoutes = require("./routes/blogRoutes/createPost.js");
const getPostRoutes = require("./routes/blogRoutes/getPost.js");
const getProductRoutes = require("./routes/productRoutes/getProducts.js");

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
app.use(express.json({ limit: "50mb" }));
app.use(fileUpload({ useTempFiles: true }));

//routes
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/user", getUserRoutes);
app.use("/api/cloudinary", cloudinaryRoute);
app.use("/api/addProduct", addProductRoutes);
app.use("/api/createPost", createPostRoutes);
app.use("/api/getPost", getPostRoutes);
app.use("/api/getProducts", getProductRoutes);

app.listen(8000, () => {
  console.log("listening on port 8000");
});

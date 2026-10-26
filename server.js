const express = require("express");
const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// dotenv.config();

const { env } = require("./src/config/env");
const { coneectDatabase } = require("./src/db/db");

const userRoute = require("./src/routes/userRoute");
const adminRoute = require("./src/routes/adminRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/admin", adminRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is wroking" });
});

const server = async () => {
  try {
    await coneectDatabase();
    
    app.listen(env.PORT, () => {
      console.log(`Server is working ${env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    process.exit(1);
  }
};
server()
const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const authRoute = require("./routes/auth.js");
let port = process.env.PORT;

//database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected successfully");
  } catch (e) {
    console.log(e);
  }
};

// middleware
app.use(express.json());
app.use("/api/auth", authRoute);

// port listening
app.listen(port, () => {
  connectDB();
  console.log(`app is running on port ${port}`);
});

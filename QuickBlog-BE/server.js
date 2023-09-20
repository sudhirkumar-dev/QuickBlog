const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const commentRoute = require("./routes/comments.js");
const path = require("path");

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
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

// port listening

app.listen(port, () => {
  connectDB();
  console.log(`app is running on port ${port}`);
});

//image upload?

const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images");
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
  },
});

//

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  // console.log(req.body);
  res.status(200).json("Image has been uploaded successfully");
});

process.on("SIGINT", () => {
  console.log("Shutting down gracefully");
  app.close(() => {
    process.exit(0);
  });
});

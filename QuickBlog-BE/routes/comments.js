const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const verifyToken = require("../middleware/verifyToken");

//create

router.post("/create", verifyToken, async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(404).json(error);
  }
});

// update

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment has Been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get
// router.get("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
//get all posts
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
//get post of a particular user
router.get("post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.userId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json("Couldn't get user's Comments");
  }
});

module.exports = router;

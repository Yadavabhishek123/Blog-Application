const router = require("express").Router();
const { default: mongoose } = require("mongoose");
// const User = require("../models/User");
const Post = require("../models/post");
// const bcrypt = require("bcrypt");

//Create new Post 
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// Update our post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true });
                res.status(200).json(updatedPost);
            }
            catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
        }
        else {
            res.status(401).json("You can Update only your post!");
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
// // Delete Post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete()
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
        }
        else {
            res.status(401).json("You can Delete only your post!");
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// // Get Post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
// Get All Post
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catname = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catname) {
            posts = await Post.find({
                categories: {
                    $in: [catname],
                },
            });
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router
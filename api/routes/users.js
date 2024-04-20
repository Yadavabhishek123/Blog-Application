const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const Post = require("../models/post");
const bcrypt = require("bcrypt");

//Update our user 
router.post("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const pdatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            req.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(401).json("You can update only your account!")// 401 means you arenot allowed
    }
})

//Delete our user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {  
            const user = await User.findById(req.params.id);
            try {
                await Post.delete({user: user.username})
                await User.findByIdAndDelete(req.params.id)
                req.status(200).json("User has been deleted...")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("User not found!")
        }
    }
    else {
        res.status(401).json("You can delete only your account!")// 401 means you arenot allowed
    }
})

// Get User
router.get("/:id", async (req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch{
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router
const mongoose = require("mongoose") // import mongodb

// create Postschema 
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

module.exports = mongoose.model("Category", CategorySchema);
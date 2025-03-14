const mongoose = require("mongoose");

const AddStartupSchema = new mongoose.Schema({
    startupName: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    image2: { type: String, required: true },
    location: { type: String, required: true },

}, { timestamps: true });

module.exports = mongoose.model("AddStartup", AddStartupSchema);

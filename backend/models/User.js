const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    CompanyName: { type: String,  },
    CompanyPhone: { type: String,  },
    image: { type: String,  },
    

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);

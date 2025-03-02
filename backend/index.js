const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

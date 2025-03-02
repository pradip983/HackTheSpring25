const User = require("../models/User");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const AddFranchise = require("../models/AddFranchise");
const AddStartup = require("../models/AddStartup")
const nodemailer = require("nodemailer");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});






const registerUserC = async (req, res) => {
    const { FirstName, LastName, email, password, role, } = req.body;
  
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ FirstName, LastName, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const registerUserV = async (req, res) => {
    const { FirstName, LastName, email, password, role, CompanyName, CompanyPhone } = req.body;
   
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ FirstName, LastName, email, password: hashedPassword, role, CompanyName, CompanyPhone });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const LogInU = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });


      
        res.json({ message: "Login successful", user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const ProfileU = async (req, res) => {
    const { FirstName,
        LastName,
        image,
        password,
        email, } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $set: { FirstName, LastName, image, password: hashedPassword } },
            { new: true } // Return the updated document
        );


      
        res.json({ message: "profile update  successful", updatedUser });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const imageU = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "File not found" });
        }

        const fileBuffer = req.file.buffer;
        const base64String = fileBuffer.toString("base64");

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(
            `data:${req.file.mimetype};base64,${base64String}`,
            { folder: "profile_pictures" }
        );

      

        return res.json({ message: "Image upload successful", url: result.secure_url });
    } catch (error) {
        console.error("Upload Error:", error);
        return res.status(500).json({ error: error.message });
    }
};

const AddFranchiseU = async (req, res) => {
    const { franchiseName, description, category, mobileNumber, email, image, image2, location } = req.body;
  
    try {

        if (!email) return res.status(400).json({ message: "email not exists" });


        const newUser = new AddFranchise({ franchiseName, description, category, mobileNumber, email, image, image2, location });
        await newUser.save();

        res.status(201).json({ message: "Add Frenchise successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const AddStartupU = async (req, res) => {
    const { startupName, description, category, mobileNumber, email, image, image2, location } = req.body;
  
    try {

        if (!email) return res.status(400).json({ message: "email not exists" });


        const newUser = new AddStartup({ startupName, description, category, mobileNumber, email, image, image2, location });
        await newUser.save();

        res.status(201).json({ message: "Add startup successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getfranchise = async (req, res) => {

    try {

        const franchises = await AddFranchise.find();
       
       

        res.status(201).json({ message: "get Frenchise successfully", franchises });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getstartup = async (req, res) => {

    try {

        const startups = await AddStartup.find();
      
       

        res.status(201).json({ message: "get startup successfully", startups });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const SendEmail = async (req, res) => {
    const { from, to, subject, message } = req.body;
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "exploreind142@gmail.com",
            pass: "zmedjegbraqauwmr",
        },
    });

    let mailOptions = {
        from:'"EXPANDING EXPRESS" <vasanpradip06@gmail.com>',
        to,
        subject,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                <h2 style="color: #007bff;">New Application</h2>
                <p><strong>From:</strong> ${from}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <div style="padding: 15px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                    <p style="font-size: 16px; line-height: 1.6; color: #333;">${message}</p>
                </div>
                <br />
                <p>Best Regards,<br><strong>Our Support Team</strong></p>
                <a href="https://yourwebsite.com" style="display: inline-block; padding: 10px 20px; margin-top: 10px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
            </div>
        `,
    };
   
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent!");
    } catch (error) {
        res.status(500).send("Failed to send email");
    }
};





module.exports = { registerUserC, registerUserV, LogInU, ProfileU, imageU, AddFranchiseU, getfranchise, getstartup, SendEmail, AddStartupU  };

const express = require("express");
const { registerUserC, registerUserV, LogInU, ProfileU, imageU, AddFranchiseU, getfranchise, getstartup, SendEmail, AddStartupU  } = require("../controllers/userController");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/registerC", registerUserC);
router.post("/registerV", registerUserV);
router.post("/LogIn", LogInU);
router.post("/ProfileU", ProfileU);
router.post("/imageU", upload.single("file"), imageU);
router.post("/AddFranchise", AddFranchiseU);
router.post("/AddStartup", AddStartupU);
router.get("/getfranchise", getfranchise);
router.get("/getstartup", getstartup);
router.post("/SendEmail", SendEmail);



module.exports = router;

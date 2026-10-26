const express = require("express");

const {
  register,
  login,
  getUser,
  updateUser,
  forgotPasswordAndSendOTP,
  verifyOTPAndResetPassword,
} = require("../controller/userController");
const { isAuth } = require("../middleware/isAuth");
const upload = require("../config/cloudinery");
const { validate } = require("../middleware/validate");
const { registerValidate } = require("../validatores/userValidatores");

const router = express.Router();

// router.post("/register", upload.single("avatar"), register);
router.post("/register", validate(registerValidate), register);
router.post("/login", login);
router.get("/me", isAuth, getUser);
router.patch("/update", isAuth, updateUser);
router.post("/send-otp", forgotPasswordAndSendOTP);
router.post("/verify-otp", verifyOTPAndResetPassword);

module.exports = router;

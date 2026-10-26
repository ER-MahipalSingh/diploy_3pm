const User = require("../models/userModel");

exports.dashboardAdmin = async (req, res) => {
  try {
    const totalUser = await User.countDocuments();
    return res.status(200).json({ message: "Admin dashboard", totalUser });
  } catch (error) {
    console.error("Error: ", error);
  }
};

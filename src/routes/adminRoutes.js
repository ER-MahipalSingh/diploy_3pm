const express = require("express");
const { dashboardAdmin } = require("../controller/adminController");
const { isAuth } = require("../middleware/isAuth");
const { isAdmin } = require("../middleware/isAdmin");

const router = express.Router();

router.get("/dashboard", isAuth, isAdmin, dashboardAdmin);

module.exports = router;

const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware")
const router = express.Router();

const { signup , login } = require("./auth.controller");

router.post("/signup", signup);
router.post("/login", login);

router.get("/me", authMiddleware, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

module.exports = router;

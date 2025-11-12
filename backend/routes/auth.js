// backend/routes/auth.js
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login route working!" });
});

router.post("/signup", (req, res) => {
  res.json({ message: "Signup route working!" });
});

module.exports = router;

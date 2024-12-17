const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userRegisterApi = require("../api/userRegister.api");

router.get("/register", [
  body("email").isEmail().withMessage("invalid email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("first name is must be at least 3 characters and long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters"),
]);

module.exports = router;

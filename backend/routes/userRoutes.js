const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

const userController = require("../controllers/userController");

router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 character long'),
    body('email').isEmail().withMessage('invalid Email'),
    body("password").isLength({ min: 4 }).withMessage('password must be at least 4 character long'),

], userController.registerUser
)


module.exports = router
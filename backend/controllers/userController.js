const userModel = require('../models/userModel');
const userService = require('../services/userServices');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({
            message: 'user already exist'
        });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({
        status: true,
        message: "User Registred Successfully",
        data: user,
        token: token
    });

}

module.exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');;
    if (!user) {
        return res.status(401).json({
            message: 'Invalid Email or Password'
        });
    }
    const isPasswordMatch = await user.comperePassword(password);
    if (!isPasswordMatch) {
        return res.status(401).json({
            message: 'Invalid Email or Password'
        });
    }
    const token = user.generateAuthToken();
    res.json({
        status: true,
        message: "User Logged In Successfully",
        token: token
    })
};

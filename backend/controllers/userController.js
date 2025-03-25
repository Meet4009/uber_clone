const userModel = require('../models/userModel');
const blacklistedTokenModel = require('../models/blacklistTokenModels');
const userService = require('../services/userServices');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');
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

        res.cookie('token', token);

        res.json({
            status: true,
            message: "User Logged In Successfully",
            token: token
        });
    } catch (error) {
        next(error);
    }
};

module.exports.getUserProfile = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.json({
            status: true,
            message: 'User Profile',
            data: user
        });
    } catch (error) {
        next(error);
    }
};

module.exports.logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        await blacklistedTokenModel.create({ token });

        res.json({
            status: true,
            message: 'User Logged out successfully'
        });
    } catch (error) {
        next(error);
    }
};

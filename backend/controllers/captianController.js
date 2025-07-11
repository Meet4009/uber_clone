const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const CaptianModel = require('../models/captianModel');
const blacklistedTokenModel = require('../models/blacklistTokenModels');
const captianService = require('../services/captianServices');

module.exports.registerCaptian = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const { fullname, email, password, vehicle } = req.body;

        const isCaptianAlready = await CaptianModel.findOne({ email });
        if (isCaptianAlready) {
            return res.status(400).json({
                message: 'Captain already exist'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const captian = await captianService.createcCaptian({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });
        const token = jwt.sign({ id: captian._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({
            message: 'Captain registered successfully',
            data: captian,
            token
        });
    } catch (error) {
        next(error);
    }
}

module.exports.loginCaptian = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const { email, password } = req.body;
        const captain = await CaptianModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({
                message: 'Invalid Email or Password. Please try again.'
            });
        }
        const isPasswordMatch = captain.comperePassword(password, captain.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: 'Invalid Email or Password. Please try again.'
            });
        }
        const token = captain.generateAuthToken();

        res.cookie('token', token);
        res.status(200).json({
            message: 'Logged in successfully',
            data: captain,
            token
        });
    } catch (error) {
        next(error);
    }
}

module.exports.getCaptianProfile = async (req, res, next) => {
    try {
        const captain = await CaptianModel.findById(req.captain.id).select('-password');
        res.json({
            message: 'Captain profile',
            data: captain
        });
    } catch (error) {
        next(error);
    }
}

module.exports.logoutCaptian = async (req, res, next) => {
    try {
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        await blacklistedTokenModel.create({ token });
        res.json({
            message: 'Logged out successfully',
            data: null
        });
    } catch (error) {
        next(error);
    }
}
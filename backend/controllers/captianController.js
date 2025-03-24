const CaptianModel = require('../models/captianModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captianService = require('../services/captianServices');
const { validationResult } = require('express-validator');


module.exports.registerCaptian = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const { fullname, email, password, vehicle } = req.body;

    const isCaptianAlready = await CaptianModel.findOne({email});
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
}




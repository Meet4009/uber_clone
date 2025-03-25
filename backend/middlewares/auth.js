const userModel = require('../models/userModel');
const CaptianModel = require('../models/captianModel');
const blacklistedTokenModel = require('../models/blacklistTokenModels');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied' });
        }

        const isBlacklisted = await blacklistedTokenModel.findOne({ token: token });
        if (isBlacklisted) {
            return res.status(401).json({ error: 'unauthorized' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decodedToken._id);
        req.user = user;

        return next();
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied' });
        }

        const isBlacklisted = await blacklistedTokenModel.findOne({ token: token });
        if (isBlacklisted) {
            return res.status(401).json({ error: 'unauthorized' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await CaptianModel.findById(decodedToken._id);
        if (!captain) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.captain = captain;

        return next();
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

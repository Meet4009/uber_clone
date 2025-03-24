const express = require('express');
const Router = express.Router();
const { body } = require('express-validator');

const CaptianController = require('../controllers/captianController');

////////////////////////////////

Router.post('/register', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('fullname.firstname').notEmpty().isLength({min:3}).withMessage('Firstname is required'),
    body('password').isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
    body('vehicle.color').notEmpty().isLength({min:3}).isIn(['red', 'blue', 'white', 'black']).withMessage('Color must be red, blue, white or black'),
    body('vehicle.plate').notEmpty().isLength({min:3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').notEmpty().isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').notEmpty().isIn(['car', 'bus', 'bike']).withMessage('Make must be car, bus, or bike')
    
], CaptianController.registerCaptian);



module.exports = Router;
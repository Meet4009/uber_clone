const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captianSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 character long.']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 character long.']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [5, 'Email must be at least 5 character long.'],
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            enum: ['red', 'blue', 'white', 'black'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 character long.'],

        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1.'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'bus', 'bike'],
        }
    },
    location: {
        lat: {
            type: Number,
        },
        long: {
            type: Number,
        }
    }
});

captianSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captianSchema.methods.comperePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captianSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

module.exports = mongoose.model('Captain', captianSchema);

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    fillname: {
        firstname: {
            type: String,
            required: true,
            unique: true,
            minlength: [3, 'First name must be at least 3 character long.']
        },
        firstname: {
            type: String,
            // required: true,
            unique: true,
            minlength: [3, 'Last name must be at least 3 character long.']
        }
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 character long.'],
    },
    password: {
        type: String,
        require: true,
    },
    socketId: {
        type: String,
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comperePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model("user",userSchema); 

module.exports = userModel;
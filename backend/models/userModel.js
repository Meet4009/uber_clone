const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fillname: {
        firstname: {
            type: String,
            required: true,
            unique:true,
            minlength:[3,'First name must be at least 3 character long ']

        }
    }
});
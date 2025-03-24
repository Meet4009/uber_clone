const captianModel = require("../models/captianModel");

module.exports.createcCaptian = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are require');
    }
    const user = await captianModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });

    return user;
}
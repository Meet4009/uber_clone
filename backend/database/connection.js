const mongoose = require("mongoose")

// connect with local
// function connectDB() {
//     mongoose.connect(process.env.DABASE_URI)
//         .then((data) => {
//             console.log(`mongoDB connected with server: ${data.connection.host}`);
//         }).catch(error => {
//             console.log(error);
//         })
// }

// // connect with atlas
function connectDB() {
    mongoose.connect(process.env.DABASE_URL)
        .then((data) => {
            console.log(`mongoDB connected with server: ${data.connection.host}`);
        }).catch(error => {
            console.log(error);
        })
}

module.exports = connectDB;
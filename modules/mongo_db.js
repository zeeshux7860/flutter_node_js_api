const mongoose = require('mongoose');
require('dotenv').config();

module.exports = dbConnect();
 function dbConnect() {
     mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

    mongoose.connection.on("error", error => console.log(error))
    mongoose.Promise = global.Promise;
}

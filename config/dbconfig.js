const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Connection = () => {

    dotenv.config();
    const MONGODB_URL = process.env.MONGODB_URL;

    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.once('open', () => {
        console.log("MongoDB Connected");
    });
};

module.exports = Connection;

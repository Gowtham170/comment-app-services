const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const userModel = require('../schema/userModel');

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const auth = async (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) {
        return res.status(401).json('Access Denied: Not authorized to access this route');
    }
    try {
        const verifiedToken = jwt.verify(token, JWT_SECRET_KEY);
        const user = await userModel.findById(verifiedToken.id);
        if(!user) {
            return res.status(404).json('No user found');
        }
        req.user = user;
        next();
    }
    catch (err) {
        res.status(400).json('Invalid Token');
    }
}; 

module.exports = auth;
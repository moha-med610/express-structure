import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config';

const generateToken = (userId, role) => {
    return jwt.sign({id: userId, role: role}, process.env.JWT_SECRET_ACCESS, {
        expiresIn: process.env.JWT_EXPIRES_ACCESS,
    })
}

export default generateToken;
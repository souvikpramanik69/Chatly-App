import jwt from "jsonwebtoken";
require('dotenv').config()
const jwtSecret = process.env.JWT_SECRET
interface Payload {
    id:string,
    email:string
}
export const generateAccessToken = (payload:Payload) => {
    if(!payload) return
    const token = jwt.sign(payload, String(jwtSecret),{expiresIn:'1d'});
    return token;
}

export const generateRefreshToken = (payload:Payload) => {
    if(!payload) return
    const token = jwt.sign(payload, String(jwtSecret),{expiresIn:'30d'});
    return token;
}
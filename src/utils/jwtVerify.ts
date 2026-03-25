import jwt from "jsonwebtoken";
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;
export const jwtVerify = (token:string) =>{
 
    try{
        const decoded = jwt.verify(token, String(jwtSecret));
        return decoded;
    }catch(err){
        return null;
    }

}
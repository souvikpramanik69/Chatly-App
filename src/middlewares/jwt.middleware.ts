import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../res/ApiResponse";
import { jwtVerify } from "../utils/jwtVerify";
import { userModel } from "../models/user";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const jwtMiddleware = async(req:Request, res:Response, next:NextFunction) =>{
 
    try{
      const authHeader = req?.headers?.authorization;
      if(!authHeader){
       return res.status(401).json(ApiResponse({
            message:"Missing Authorization Header",
            status:400,
            success:false
        }));
      }
      const token = authHeader?.split(" ")[1];
      if(!token){
       return res.status(401).json(ApiResponse({
            message:"Unautorized",
            status:401,
            success:false
        }));
       }
       const tokenData:any = jwtVerify(String(token));
       
       const user = await userModel.findOne({where:{
        email:String(tokenData?.email)
       },attributes:{exclude:["password","createdAt","updatedAt"]}})
    if(!user){
               return res.status(401).json(ApiResponse({
            message:"Unautorized",
            status:401,
            success:false
        }));
    }
     req.user = user
       next();


    }catch(err){
      return res.status(500).json(ApiResponse({
        message:String(err),
        status:500,
        success:false
      }))
    }


 

}
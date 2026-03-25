import { Request } from "express";
import { ApiResponse } from "../res/ApiResponse";
import { userModel } from "../models/user";

export const loginService = async(req:Request) =>{

    try{
        const {email,password} = req.body;
        const data = await userModel.findOne({where:{email:email,password:password}})
        return ApiResponse({
            message:"User logged in successfully",
            status:200,
            success:true,
            data:data
        })
    }catch(err){
        return ApiResponse({
            message:String(err),
            status:500,
            success:false
        })
    }

}
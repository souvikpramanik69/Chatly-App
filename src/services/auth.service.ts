import { Request } from "express";
import { ApiResponse } from "../res/ApiResponse";
import { userModel } from "../models/user";
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokes";

export const loginService = async(req:Request) =>{

    try{
        const {email,password} = req.body;
        const data:any = await userModel.findOne({where:{email:email,password:password}})
        if(data == null){
      return ApiResponse({
            message:"User doesn't exist",
            status:404,
            success:false,
        })
        }
        const accessToken = await generateAccessToken({email:data?.email,id:data?.id});
        const refreshToken = await generateRefreshToken({email:data?.email,id:data?.id});

         console.log("Access token " ,accessToken)

        data.dataValues['access_token'] = accessToken
        data.dataValues['refresh_token'] = refreshToken
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
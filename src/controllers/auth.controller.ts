import { Request, Response } from "express"
import { ApiResponse } from "../res/ApiResponse"
import { loginService } from "../services/auth.service";

export const loginController = async (req:Request,res:Response) =>{
    try{
       const data = await loginService(req);
       return res.status(data?.payload.status).json(data);
    }catch(err){
        return ApiResponse({
            message:String(err),
            status:500,
            success:false
        })
    }
}


export const signupController = (req:Request,res:Response) =>{
    try{

    }catch(err){
        return ApiResponse({
            message:String(err),
            status:500,
            success:false
        })
    }
}
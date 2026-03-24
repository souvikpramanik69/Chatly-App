import { Request } from "express";
import { userModel } from "../models/user";
import { ApiResponse } from "../res/ApiResponse";

export const getAllUserService = async(req:Request) => {
    try{
       const {count,rows} = await userModel.findAndCountAll();
        return ApiResponse({
            message: "Users fetched successfully",
            status: 200,
            success: true,
            data: {
                count,
                rows
            }
        })
    }catch(err){
        
    }
}
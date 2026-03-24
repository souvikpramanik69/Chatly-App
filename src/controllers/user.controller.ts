import { Request ,Response} from "express";
import { getAllUserService } from "../services/user.service";
import { ApiResponse } from "../res/ApiResponse";

export const userController = async(req:Request,res:Response) => {
try{
   const data = await getAllUserService(req);
   return res.status(Number(data?.payload.status)).json(data);
}catch(err){
  return res.status(500).json(ApiResponse({
    message:String(err),
    status:500,
    success:false,
  }))
}
}
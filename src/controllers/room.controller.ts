import { Request, Response } from "express";
import { addRoomService, getAllRooms } from "../services/room.service";
import { ApiResponse } from "../res/ApiResponse";

export const addRoomController = async(req:Request,res:Response) =>{
try{
const data = await addRoomService(req);
return res.status(data?.payload?.status).json(data);``
}catch(err){
return res.status(500).json(ApiResponse({
    message:String(err),
    status:500,
    success:false,
}))
}
}

export const getAllRoomController = async(req:Request,res:Response) =>{
try{
const data = await getAllRooms(req);
return res.status(data?.payload?.status).json(data);``
}catch(err){
return res.status(500).json(ApiResponse({
    message:String(err),
    status:500,
    success:false,
}))
}
}
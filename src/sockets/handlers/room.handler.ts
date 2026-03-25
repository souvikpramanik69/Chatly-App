import { SocketHanlderParamTypes } from "../../types/scoketType";

export const roomHanlder = ({io,socket}:SocketHanlderParamTypes) =>{
    try{
       socket.on("join-room",async({roomId})=>{
        console.log("Room id from socket " , roomId)
        if(socket?.data?.roomId){
            socket.leave(socket?.data?.roomId);
        }
        socket.join(roomId)
        socket.data.roomId = roomId

       })
    }
    catch(err){

    }

}
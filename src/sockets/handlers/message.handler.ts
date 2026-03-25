import { v4 } from "uuid";
import { messageModel } from "../../models/Message";
import { SocketHanlderParamTypes } from "../../types/scoketType";

export const messageHandler = ({io,socket}:SocketHanlderParamTypes) =>{
socket.on('send-message',async(payload,cb)=>{
   const roomId = socket?.data?.roomId;
   const userId = socket?.data?.userId;
   const {message,senderId,type} = payload;
   const createMessage = await messageModel.create({
    id:v4(),
      room_id:roomId,
      sender_id:senderId,
      message:message,
      type:type
   })
 
   socket.to(roomId).emit('receive_message',createMessage)
   cb({status:200,data:createMessage})

})
}
import { v4 } from "uuid";
import { messageModel } from "../../models/Message";
import { SocketHanlderParamTypes } from "../../types/scoketType";

export const messageHandler = ({ io, socket }: SocketHanlderParamTypes) => {
  socket.on("send-message", async (payload, cb) => {
    const roomId = socket?.data?.roomId;
    const { message, roomDetails, typing, userId } = payload;
    console.log("Payload ", payload);
    if (message && roomDetails && userId) {
      await messageModel.create({
        id: v4(),
        room_id: roomDetails?.id,
        sender_id: userId,
        message: message,
        type: "text",
      });
    }

    const data = {
      message: message,
      typing,
      roomDetails,
    };

    socket.to(roomId).emit("receive_message", data);
    // cb({ status: 200, data: message });
  });

  socket.on("new-room-create", async (payload) => {
    socket.emit("new-room-created", payload);
  });
};

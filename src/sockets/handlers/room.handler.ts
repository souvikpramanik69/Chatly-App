import { SocketHanlderParamTypes } from "../../types/scoketType";

export const roomHanlder = ({ io, socket }: SocketHanlderParamTypes) => {
  socket.on("join-room", async (data) => {
    console.log("Room id from socket ", data);
    if (data?.id) {
      socket.leave(socket?.data?.roomId);
    }
    socket.join(data?.id);
    console.log("Room connectdd ", )
    socket.data.roomId = data?.id;
  });
};

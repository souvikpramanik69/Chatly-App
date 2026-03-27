import { SocketHanlderParamTypes } from "../../types/scoketType";
import { messageHandler } from "./message.handler";
import { roomHanlder } from "./room.handler";

export const connectionHandler = ({socket,io}:SocketHanlderParamTypes) =>{
  roomHanlder({io,socket});
  messageHandler({io,socket});
}
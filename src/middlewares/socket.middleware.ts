import { NextFunction } from "express";
import { io } from "../server";
import { jwtVerify } from "../utils/jwtVerify";
import { Socket } from "socket.io";


export const socketMiddleware = () => {
 io.use((socket, next) => {
  try {

    // const token = socket.handshake.auth.token;
    // const decoded: any = jwtVerify(token);
    // socket.data.userId = decoded.id; 
    console.log("Socket middleware runing")

    next();
  } catch (err) {
    next(new Error("Unauthorized"));
  }
});
}

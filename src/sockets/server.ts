import http from "http";
import app from "../app";
import { Server } from "socket.io";
const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "*",
    // methods: ['GET', 'POST']
  },
});

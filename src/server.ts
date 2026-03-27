import http from 'http'
import { Server } from 'socket.io';
import app from './app';
import './models';
import { socketMiddleware } from './middlewares/socket.middleware';
import { connectionHandler } from './sockets/handlers/connection.handler';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);

// Use Render-assigned port first
const PORT = process.env.PORT || process.env.SERVER_PORT || 8001;

export const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

socketMiddleware();

io.on("connection", (socket) => {
  connectionHandler({ socket, io });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import http from 'http'
import { Server } from 'socket.io';
import app from './app';
import './models'
import { socketMiddleware } from './middlewares/socket.middleware';
import { connectionHandler } from './sockets/handlers/connection.handler';
const server = http.createServer(app);
require('dotenv').config()
const port  = process.env.SERVER_PORT || 8001

export const io = new Server(server, {
    cors: {
        origin: '*',
        // methods: ['GET', 'POST']
    }
})
  
socketMiddleware();

io.on("connection", (socket) => {
  
  connectionHandler({socket,io});

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
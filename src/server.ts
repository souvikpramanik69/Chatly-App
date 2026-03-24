import http from 'http'
import { Server } from 'socket.io';
import app from './app';
const server = http.createServer(app);
require('dotenv').config()
const port  = process.env.SERVER_PORT
export const io = new Server(server, {
    cors: {
        origin: '*',
        // methods: ['GET', 'POST']
    }
})
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (message) => {
    console.log("Message:", message);

    // send to everyone
    io.emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
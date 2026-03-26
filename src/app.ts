import express from "express";
import cors from "cors";
import router from "./routes/root.route";
import './config/dbConfig'
import morgan from "morgan";
import { userRouter } from "./routes/user.route";
import { authRouter } from "./routes/auth.route";
import { roomRouter } from "./routes/room.route";


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Routers --- 
app.use(router);
app.use(userRouter);
app.use(authRouter);
app.use(roomRouter);


export default app;
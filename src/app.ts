import express from "express";
import cors from "cors";
import router from "./routes/root.route";
import './config/dbConfig'
import morgan from "morgan";
import { userRouter } from "./routes/user.route";


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Routers --- 
app.use(router);
app.use(userRouter);


export default app;
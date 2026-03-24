import express from "express";
import cors from "cors";
import { io } from "./sockets/server";
import router from "./routes/root.route";
import './config/dbConfig'


const app = express();
app.use(cors());
app.use(express.json());

//Routers --- 
app.use(router);


export default app;
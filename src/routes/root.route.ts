import app from "../app";
import Express, { Router } from "express";
 const router = Router();
router.get("/", (req: Express.Request, res: Express.Response) => {
    res.status(200).json({ message: "Welcome to Chatly App" });
});
export default router
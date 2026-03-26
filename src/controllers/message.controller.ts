import { Request, Response } from "express";
import { ApiResponse } from "../res/ApiResponse";
import { getMessageByRoomIdService } from "../services/message.service";

export const getAllMessageController = async (req: Request, res: Response) => {
  try {
    const data = await getMessageByRoomIdService(req);
    return res.status(data?.payload?.status).json(data?.payload);
  } catch (err) {
    return res.status(500).json(
      ApiResponse({
        message: String(err),
        status: 500,
        success: false,
      }),
    );
  }
};

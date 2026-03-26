import { Request } from "express";
import { ApiResponse } from "../res/ApiResponse";
import { messageModel } from "../models/Message";

export const getMessageByRoomIdService = async (req: Request) => {
  try {
    const { room_id } = req?.query;
    const messages = await messageModel.findAndCountAll({
      where: {
        room_id: room_id,
      },
    });
    return ApiResponse({
      message: "All message retrieved successfully",
      status: 200,
      success: true,
      data: messages,
    });
  } catch (err) {
    return ApiResponse({
      message: String(err),
      status: 500,
      success: true,
    });
  }
};

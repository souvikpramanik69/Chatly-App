import { Request } from "express";
import { userModel } from "../models/user";
import { ApiResponse } from "../res/ApiResponse";
import { messageModel } from "../models/Message";
import { roomModel } from "../models/room";
import { Op } from "sequelize";

export const getAllUserService = async (req: Request) => {
  try {
    const { remove_user_id } = req.query;

    const { count, rows } = await userModel.findAndCountAll({
      include: [roomModel],
      where: {
        id: {
          [Op.ne]: remove_user_id,
        },
      },
    });

    return ApiResponse({
      message: "Users fetched successfully",
      status: 200,
      success: true,
      data: {
        count: count,
        rows: rows,
      },
    });
  } catch (err) {
    return ApiResponse({
      message: String(err),
      status: 500,
      success: true,
    });
  }
};

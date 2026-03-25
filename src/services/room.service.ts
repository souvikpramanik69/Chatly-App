import { Op } from "sequelize";
import { roomMemberModel } from "../models/RoomMember";
import { ApiResponse } from "../res/ApiResponse";
import { Request, Response } from "express";
import { v4 } from "uuid";
import { roomModel } from "../models/room";

export const addRoomService = async (req: Request, res: Response) => {
  try {
    const { userId, role, user2Id } = req.body;

    const roomId = [userId, user2Id].sort().join("_");
    // ✅ Check first
    const isRoomExist = await roomModel.findOne({
      where: { id: roomId },
    });

    if (isRoomExist) {
      return ApiResponse({
        message: "Room already exist",
        status: 409,
        success: false,
      });
    }

    const [room] = await roomModel.findOrCreate({
      where: { id: roomId },
      defaults: {
        id: roomId,
        name: "private_chat",
        type: "private",
        created_by: userId,
      },
    });

    // 2. add members
    await roomMemberModel.bulkCreate(
      [
        { room_id: roomId, user_id: userId },
        { room_id: roomId, user_id: user2Id },
      ],
      { ignoreDuplicates: true },
    );

    // 3. fetch with members
    const result = await roomModel.findOne({
      where: { id: roomId },
      include: [{ model: roomMemberModel }],
    });
    return ApiResponse({
      message: "Room has been added successflly",
      status: 200,
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(500).json(
      ApiResponse({
        status: 500,
        message: String(err),
        success: false,
      }),
    );
  }
};

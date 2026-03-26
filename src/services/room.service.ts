import { Op } from "sequelize";
import { roomMemberModel } from "../models/RoomMember";
import { ApiResponse } from "../res/ApiResponse";
import { Request, Response } from "express";
import { v4 } from "uuid";
import { roomModel } from "../models/room";
import { userModel } from "../models/user";

export const addRoomService = async (req: Request) => {
  try {
    const { senderId, receiverId } = req.body;

    const roomId = [senderId, receiverId].sort().join("_");
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
        name: `chat-${roomId}`,
        type: "private",
        created_by: senderId,
      },
    });

    // 2. add members
    await roomMemberModel.bulkCreate(
      [
        { id:v4(),room_id: roomId, user_id: senderId },
        { id:v4(),room_id: roomId, user_id: receiverId },
      ],
      { ignoreDuplicates: true },
    );

    // 3. fetch with members
    const result = await roomModel.findOne({
      where: { id: roomId },
      include: [
        {
          model:userModel,
          as: "users",
          attributes: ["id", "firstName",'lastName'], // adjust fields
          through: {
            attributes: [] // hide roomMember table
          }
        }
      ]
    });
        return ApiResponse({
        message: "Room has been created successfully",
        status: 200,
        success: true,
        data:result
      });
  } 
  catch (err) {

       return ApiResponse({
        message: String(err),
        status: 500,
        success: false,
      });

    }
};

export const getAllRooms = async (req: Request) => {
  try {
    const { user_id } = req.query;

    const data = await roomModel.findAndCountAll({
      include: [
        {
          model: userModel,
          as: "users",
          attributes: ["id", "firstName",'lastName'], // adjust fields
          where: user_id
            ? {
                id: {
                  [Op.ne]: user_id
                }
              }
            : undefined,
          through: {
            attributes: [] // hide roomMember table
          }
        }
      ]
    });

    return ApiResponse({
      message: "Rooms fetched successfully",
      status: 200,
      success: true,
      data
    });
  } catch (err) {
    return ApiResponse({
      message: String(err),
      status: 500,
      success: false
    });
  }
};

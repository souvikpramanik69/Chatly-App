import { Request } from "express";
import { userModel } from "../models/user";
import { ApiResponse } from "../res/ApiResponse";
import { Op } from "sequelize";

export const getAllUserService = async (req: Request) => {
  try {

    //Unwanted user id because i want to remove my name from my contact list by souvik
    const { unwanted_user_id } = req.query;
    const where: any = {}
    if (unwanted_user_id) {
      where.id = {
        [Op.ne]: unwanted_user_id
      }
    }

    const { count, rows } = await userModel.findAndCountAll({
    where: where,
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

export const getUserProfile = async (req: Request) => {
  try {
     const userData = req?.user;
     if(!userData){
      return ApiResponse({
        message: "User profile not found",
        status: 404,
        success: true,
      });
     }
    return ApiResponse({
      message: "Users fetched successfully",
      status: 200,
      success: true,
      data: userData,
    });
  } catch (err) {
    return ApiResponse({
      message: String(err),
      status: 500,
      success: true,
    });
  }
};

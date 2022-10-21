import { Request, Response } from "express";
import { deleteUserService } from "../services/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id

    const deletedUser = await deleteUserService(id);

    return res.status(204).json(deletedUser);
  } catch (error) {

    if(error instanceof Error) {
      return res.status(400).json({
        message: error.message
      });
    };
  }
};
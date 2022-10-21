import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users";
import { createUserService } from "../services/createUser.service";
import { instanceToPlain } from "class-transformer";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user: IUserRequest = req.body;
    const newUser = await createUserService(user);

    return res.status(201).json(instanceToPlain(newUser));

  } catch (error) {

    if(error instanceof Error) {
      return res.status(400).json({
        message: error.message
      });
    };
    
  };
};
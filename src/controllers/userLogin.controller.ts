import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import { userLoginService } from "../services/userLogin.service";

export const userLoginController = async (req: Request, res: Response) => {
  try {
    const userToken: IUserLogin = req.body;

    const token = await userLoginService(userToken);

    return res.json({token});

  } catch (error) {
    if(error instanceof Error) {
      return res.status(403).json({
        message: error.message
      });
    };
  };
};
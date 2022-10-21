import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

export const userExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({id});

  if(!user) {
    return res.status(404).json({message: "User not found"})
  };

  return next()
};
import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserLogin } from "../interfaces/users";
import 'dotenv/config';

export const userLoginService = async ({email, password}:IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email: email
  });
  
  if(!user) {
    throw new Error("Wrong email/password");
  };
  
  const passwordMatch = await compare(password, user.password)

  if(!passwordMatch) {
    throw new Error("Wrong email/password");
  };

  const token = jwt.sign({isAdm: user.isAdm}, String(process.env.SECRET_KEY), {expiresIn: "1d", subject: user.id});

  return token;
};
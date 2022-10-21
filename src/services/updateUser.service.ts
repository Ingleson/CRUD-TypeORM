import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";
import bcrypt, { hash } from "bcrypt";

export const updateUserService = async ({name, email, password}:IUserUpdate, id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({id});

  if(!findUser) {
    throw new Error("User not found");
  };
  
  await userRepository.update(
    id,
    {
      name: name ? name : findUser.name,
      email: email ? email : findUser.email,
      password: password ? await hash(password, 10) : findUser.password,
      updatedAt: new Date
    }
  )

  const updatedUser = await userRepository.findOneBy({id})

  return updatedUser!;
}
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

export const deleteUserService = async (id: string):Promise<object> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({id});

  if(!findUser) {
    throw new Error("User not found")
  };

  if(!findUser.isActive) {
    throw new Error("Inactive user")
  };

  await userRepository.update(
    id,
    {
      isActive: false
    }
  );

  return {message: "User deleted"};
};
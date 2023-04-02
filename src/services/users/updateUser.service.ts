import { Repository } from "typeorm";
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { returnUserSchema } from "../../schemas/users.schemas";

const updateUserService = async (
  newUserData: IUserUpdate,
  IdUser: string
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: IdUser,
  });

  const user = userRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await userRepository.save(user);

  const updatedUser = returnUserSchema.parse(user);

  return updatedUser;
};

export default updateUserService;

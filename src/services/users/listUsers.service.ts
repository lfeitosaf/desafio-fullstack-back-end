import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUsersReturn } from "../../interfaces/users.interfaces";
import { returnMultipleUsersSchema } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<IUsersReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers = await userRepository.find();

  const users = returnMultipleUsersSchema.parse(findUsers);

  return users;
};

export default listUsersService;

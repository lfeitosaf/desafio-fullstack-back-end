import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";

import { IUserReturn } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { userWithContactsSchema } from "../../schemas/users.schemas";

const getOwnProfileService = async (IdUser: string): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: IdUser,
    },
    relations: {
      contacts: true,
    },
  });

  const user = userWithContactsSchema.parse(findUser);

  return user;
};

export default getOwnProfileService;

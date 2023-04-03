import { IUser, IUserReturn } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { AppError } from "../../errors/errors";
import { returnUserSchema } from "../../schemas/users.schemas";

const createUserService = async (userData: IUser): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userEmail = userData.email;
  const userTelephone = userData.telefone.toString();

  const searchUser = await userRepository.findOneBy({ email: userEmail });

  if (searchUser) {
    throw new AppError("Email already in use", 409);
  }

  const searchTelephone = await userRepository.findOneBy({
    telefone: userTelephone,
  });

  if (searchTelephone) {
    throw new AppError("Telephone number already registered", 409);
  }

  const createdUser = userRepository.create(userData);

  await userRepository.save(createdUser);

  const newUser = returnUserSchema.parse(createdUser);

  return newUser;
};

export default createUserService;

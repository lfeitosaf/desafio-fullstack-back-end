import { Repository } from "typeorm";
import { Contact, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { IContactsByUser } from "../../interfaces/contact.interfaces";
import { contactWithUserSchema } from "../../schemas/contacts.schemas";
import { userWithContactsSchema } from "../../schemas/users.schemas";

const listContactsByUserService = async (
  IdUser: string
): Promise<IContactsByUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: IdUser,
    },
    relations: {
      contacts: true,
    },
  });

  const returnContacts = userWithContactsSchema.parse(user);

  return returnContacts;
};

export default listContactsByUserService;

import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { IContact } from "../../interfaces/contact.interfaces";
import { returnContactSchema } from "../../schemas/contacts.schemas";
import { AppError } from "../../errors/errors";

const createContactService = async (
  IdUser: string,
  contactData: IContact
): Promise<IContact> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOneBy({
    id: IdUser,
  });

  const contact: Contact = contactRepository.create({
    ...contactData,
    user: user!,
  });

  await contactRepository.save(contact);

  const returnContact = returnContactSchema.parse(contact);

  return returnContact;
};
export default createContactService;

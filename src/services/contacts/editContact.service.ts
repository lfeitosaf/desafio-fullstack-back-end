import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { IContact, IContactReturn } from "../../interfaces/contact.interfaces";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (
  newContactData: IContact,
  IdUser: string
): Promise<IContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContactData = await contactRepository.findOneBy({
    id: IdUser,
  });

  const contact = contactRepository.create({
    ...oldContactData,
    ...newContactData,
  });

  await contactRepository.save(contact);

  const updatedContact = returnContactSchema.parse(contact);

  return updatedContact;
};

export default updateContactService;

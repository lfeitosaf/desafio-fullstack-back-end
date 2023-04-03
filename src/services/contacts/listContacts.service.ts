import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { IContactsReturn } from "../../interfaces/contact.interfaces";
import { AppDataSource } from "../../data-source";
import {
  contactWithUserSchema,
  returnMultipleContactsSchema,
} from "../../schemas/contacts.schemas";

const listContactsService = async (): Promise<IContactsReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts: Array<Contact> = await contactRepository.find({
    relations: {
      user: true,
    },
  });

  const returnContacts = returnMultipleContactsSchema.parse(contacts);

  return returnContacts;
};

export default listContactsService;

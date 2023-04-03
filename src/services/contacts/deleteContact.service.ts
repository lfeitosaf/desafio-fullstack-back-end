import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

const deleteContactService = async (IdContact: string) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: IdContact,
    },
  });
  await contactRepository.remove(contact!);
};

export default deleteContactService;

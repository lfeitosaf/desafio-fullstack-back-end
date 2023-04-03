import { Request, Response } from "express";
import { IContact } from "../interfaces/contact.interfaces";
import listContactsService from "../services/contacts/listContacts.service";
import listContactsByUserService from "../services/contacts/listContactsByUser.service";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: string = req.user.id;
  const contactData: IContact = req.body;

  const newContact = await createContactService(idUser, contactData);
  return res.status(201).json(newContact);
};

const listContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listContactsService();

  return res.json(contacts);
};

const listContactsByUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const IdUser: string = req.params.id;

  const contacts = await listContactsByUserService(IdUser);

  return res.json(contacts);
};

const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);

  return res.status(204).send();
};

export {
  createContactController,
  listContactsController,
  listContactsByUserController,
  deleteContactController,
};

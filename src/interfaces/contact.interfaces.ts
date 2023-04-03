import { DeepPartial } from "typeorm";
import {
  contactSchema,
  returnContactSchema,
  returnMultipleContactsSchema,
} from "../schemas/contacts.schemas";
import { z } from "zod";
import { userWithContactsSchema } from "../schemas/users.schemas";

type IContact = z.infer<typeof contactSchema>;
type IContactReturn = z.infer<typeof returnContactSchema>;
type IContactsReturn = z.infer<typeof returnMultipleContactsSchema>;
type IContactUpdate = DeepPartial<IContact>;
type IContactsByUser = z.infer<typeof userWithContactsSchema>;

export {
  IContact,
  IContactReturn,
  IContactsReturn,
  IContactUpdate,
  IContactsByUser,
};

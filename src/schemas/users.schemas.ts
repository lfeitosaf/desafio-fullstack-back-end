import { hashSync } from "bcryptjs";
import { z } from "zod";
import { returnMultipleContactsSchema } from "./contacts.schemas";

const userSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email().min(10).max(45),
  telefone: z.string().min(10).max(11),
  password: z
    .string()
    .min(4)
    .max(20)
    .transform((pass) => {
      return hashSync(pass, 10);
    }),
});

const userUpdateSchema = userSchema.partial();

const returnUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  telefone: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

const returnMultipleUsersSchema = returnUserSchema.array();

const userWithContactsSchema = returnUserSchema.extend({
  contacts: returnMultipleContactsSchema,
});

export {
  userSchema,
  returnUserSchema,
  returnMultipleUsersSchema,
  userUpdateSchema,
  userWithContactsSchema,
};

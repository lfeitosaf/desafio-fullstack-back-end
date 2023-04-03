import { z } from "zod";
import { returnUserSchema } from "./users.schemas";

const contactSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email().min(10).max(45),
  telefone: z.string().min(10).max(11),
});

const contactUpdateSchema = contactSchema.partial();

const returnContactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  telefone: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

const returnMultipleContactsSchema = returnContactSchema.array();

const contactWithUserSchema = returnContactSchema
  .extend({
    user: returnUserSchema,
  })
  .array();

export {
  contactSchema,
  contactUpdateSchema,
  returnContactSchema,
  returnMultipleContactsSchema,
  contactWithUserSchema,
};

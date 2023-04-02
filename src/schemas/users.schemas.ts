import { hashSync } from "bcryptjs";
import { z } from "zod";

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

const returnUserSchema = userSchema
  .extend({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({
    password: true,
  });

const returnMultipleUsersSchema = returnUserSchema.array();

export {
  userSchema,
  returnUserSchema,
  returnMultipleUsersSchema,
  userUpdateSchema,
};

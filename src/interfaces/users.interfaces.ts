import { DeepPartial } from "typeorm";
import {
  userSchema,
  returnUserSchema,
  returnMultipleUsersSchema,
} from "../schemas/users.schemas";
import { z } from "zod";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IUsersReturn = z.infer<typeof returnMultipleUsersSchema>;
type IUserUpdate = DeepPartial<IUser>;

export { IUser, IUserReturn, IUsersReturn, IUserUpdate };

import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getOwnProfile,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import { userSchema, userUpdateSchema } from "../schemas/users.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);
userRoutes.get("", ensureTokenIsValidMiddleware, listUsersController);
userRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController);
userRoutes.patch(
  "/profile",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(userUpdateSchema),
  updateUserController
);
userRoutes.get("/profile", ensureTokenIsValidMiddleware, getOwnProfile);

export default userRoutes;

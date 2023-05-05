import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsByUserController,
  listContactsController,
  updateContactController,
} from "../controllers/contacts.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";

const contactRoutes: Router = Router();

contactRoutes.post("", ensureTokenIsValidMiddleware, createContactController);
contactRoutes.get("", ensureTokenIsValidMiddleware, listContactsController);
contactRoutes.get(
  "/users/:id",
  ensureUserExistsMiddleware,
  listContactsByUserController
);
contactRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  deleteContactController
);

export default contactRoutes;

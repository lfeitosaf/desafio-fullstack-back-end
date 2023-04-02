import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.json(users);
};

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);

  return res.status(204).send();
};

const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const IdUser = req.params.id;

  const updatedUser = await updateUserService(userData, IdUser);

  return res.json(updatedUser);
};

export {
  createUserController,
  listUsersController,
  deleteUserController,
  updateUserController,
};

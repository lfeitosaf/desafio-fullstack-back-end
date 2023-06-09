import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";
import getOwnProfileService from "../services/users/getOwnProfile.service";

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
  await deleteUserService(req.user.id);

  return res.status(204).send();
};

const updateUserController = async (req: Request, res: Response) => {
  console.log(req.user.id);
  const userData = req.body;
  const IdUser = req.user.id;

  const updatedUser = await updateUserService(userData, IdUser);

  return res.json(updatedUser);
};

const getOwnProfile = async (req: Request, res: Response) => {
  console.log(req.user.id);
  const IdUser = req.user.id;
  const ownProfile = await getOwnProfileService(IdUser);

  return res.json(ownProfile);
};

export {
  createUserController,
  listUsersController,
  deleteUserController,
  updateUserController,
  getOwnProfile,
};

import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/errors";

const ensureUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const searchUser = await userRepository.findOneBy({ id: req.params.id });

  if (!searchUser) {
    throw new AppError("User not found", 404);
  }

  next();
};

export default ensureUserExistsMiddleware;

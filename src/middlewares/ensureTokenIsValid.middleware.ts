import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/errors";
import jwt from "jsonwebtoken";

const ensureTokenIsValidMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Token is missing", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    req.user = {
      id: String(decoded?.sub),
    };

    return next();
  });
};

export default ensureTokenIsValidMiddleware;

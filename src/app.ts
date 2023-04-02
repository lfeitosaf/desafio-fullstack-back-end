import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./errors/errors";
import userRoutes from "./routers/users.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use(handleError);

export default app;

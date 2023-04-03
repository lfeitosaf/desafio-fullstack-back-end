import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./errors/errors";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import contactRoutes from "./routers/contacts.routes";

const cors = require("cors");

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);

app.use(handleError);

export default app;

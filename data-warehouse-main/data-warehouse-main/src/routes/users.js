import express from "express";
import { usersControllers } from "../controllers/users.js";
import { usersMiddlewares } from "../middlewares/users.js";
import { globalsMiddlewares } from "../middlewares/globals.js";

const usersRoutes = express.Router();

usersRoutes.get("/users/findAll", usersControllers.findAll);
usersRoutes.get("/users/findById", globalsMiddlewares.missingId, usersMiddlewares.userNotFound, usersControllers.findOne);
usersRoutes.get("/users/findByName", globalsMiddlewares.missingName, usersMiddlewares.userNotFound, usersControllers.findOne);
usersRoutes.post(
  "/users/post",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingPassword,
  usersMiddlewares.userAlreadyExists,
  usersControllers.post
);
usersRoutes.post(
  "/users/login",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingPassword,
  usersMiddlewares.dataDoNotMatch,
  usersControllers.login
);
usersRoutes.delete("/users/deleteById", globalsMiddlewares.missingId, usersMiddlewares.userNotFound, usersControllers.delete);
usersRoutes.delete("/users/deleteByName", globalsMiddlewares.missingName, usersMiddlewares.userNotFound, usersControllers.delete);
usersRoutes.put(
  "/users/putById",
  globalsMiddlewares.missingId,
  globalsMiddlewares.missingNewName,
  globalsMiddlewares.missingPassword,
  usersMiddlewares.userNotFound,
  usersControllers.put
);
usersRoutes.put(
  "/users/putByName",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingNewName,
  globalsMiddlewares.missingPassword,
  usersMiddlewares.userNotFound,
  usersControllers.put
);

export { usersRoutes };

import express from "express";
import { companiesControllers } from "../controllers/companies.js";
import { companiesMiddlewares } from "../middlewares/companies.js";
import { globalsMiddlewares } from "../middlewares/globals.js";

const companiesRoutes = express.Router();

companiesRoutes.get("/companies/findAll", companiesControllers.findAll);
companiesRoutes.get(
  "/companies/findById",
  globalsMiddlewares.missingId,
  companiesMiddlewares.notFound,
  companiesControllers.findOne
);
companiesRoutes.get(
  "/companies/findByName",
  globalsMiddlewares.missingName,
  companiesMiddlewares.notFound,
  companiesControllers.findOne
);
companiesRoutes.post(
  "/companies/post",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingAddress,
  globalsMiddlewares.missingCityId,
  globalsMiddlewares.missingEmail,
  globalsMiddlewares.missingPhoneNumber,
  companiesMiddlewares.alreadyExists,
  companiesControllers.post
);
companiesRoutes.delete(
  "/companies/deleteById",
  globalsMiddlewares.missingId,
  companiesMiddlewares.notFound,
  companiesControllers.delete
);
companiesRoutes.delete(
  "/companies/deleteByName",
  globalsMiddlewares.missingName,
  companiesMiddlewares.notFound,
  companiesControllers.delete
);
companiesRoutes.put(
  "/companies/put",
  globalsMiddlewares.missingId,
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingAddress,
  globalsMiddlewares.missingCityId,
  globalsMiddlewares.missingEmail,
  globalsMiddlewares.missingPhoneNumber,
  companiesMiddlewares.notFound,
  companiesControllers.put
);

export { companiesRoutes };

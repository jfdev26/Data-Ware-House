import express from "express";
import { countriesControllers } from "../controllers/countries.js";
import { countriesMiddlewares } from "../middlewares/countries.js";
import { globalsMiddlewares } from "../middlewares/globals.js";

const countriesRoutes = express.Router();

countriesRoutes.get("/countries/findAll", countriesControllers.findAll);
countriesRoutes.get("/countries/findById", globalsMiddlewares.missingId, countriesMiddlewares.countryNotFound, countriesControllers.findOne);
countriesRoutes.get("/countries/findByName", globalsMiddlewares.missingName, countriesMiddlewares.countryNotFound, countriesControllers.findOne);
countriesRoutes.post(
  "/countries/post",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingRegionId,
  countriesMiddlewares.nameAlreadyExists,
  countriesMiddlewares.regionNotFound,
  countriesControllers.post
);
countriesRoutes.delete("/countries/deleteById", globalsMiddlewares.missingId, countriesMiddlewares.countryNotFound, countriesControllers.delete);
countriesRoutes.delete("/countries/deleteByName", globalsMiddlewares.missingName, countriesMiddlewares.countryNotFound, countriesControllers.delete);
countriesRoutes.put(
  "/countries/putById",
  globalsMiddlewares.missingId,
  globalsMiddlewares.missingNewName,
  globalsMiddlewares.missingRegionId,
  countriesMiddlewares.countryNotFound,
  countriesControllers.put
);
countriesRoutes.put(
  "/countries/putByName",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingNewName,
  globalsMiddlewares.missingRegionId,
  countriesMiddlewares.countryNotFound,
  countriesControllers.put
);

export { countriesRoutes };

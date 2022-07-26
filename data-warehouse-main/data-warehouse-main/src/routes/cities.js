import express from "express";
import { citiesControllers } from "../controllers/cities.js";
import { citiesMiddlewares } from "../middlewares/cities.js";
import { globalsMiddlewares } from "../middlewares/globals.js";

const citiesRoutes = express.Router();

citiesRoutes.get("/cities/findAll", citiesControllers.findAll);
citiesRoutes.get(
  "/cities/findById",
  globalsMiddlewares.missingId,
  citiesMiddlewares.cityNotFound,
  citiesControllers.findOne
);
citiesRoutes.get(
  "/cities/findByName",
  globalsMiddlewares.missingName,
  citiesMiddlewares.cityNotFound,
  citiesControllers.findOne
);
citiesRoutes.post(
  "/cities/post",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingCountryId,
  citiesMiddlewares.nameAlreadyExists,
  citiesMiddlewares.countryNotFound,
  citiesControllers.post
);
citiesRoutes.delete(
  "/cities/deleteById",
  globalsMiddlewares.missingId,
  citiesMiddlewares.cityNotFound,
  citiesControllers.delete
);
citiesRoutes.delete(
  "/cities/deleteByName",
  globalsMiddlewares.missingName,
  citiesMiddlewares.cityNotFound,
  citiesControllers.delete
);
citiesRoutes.put(
  "/cities/putById",
  globalsMiddlewares.missingId,
  globalsMiddlewares.missingNewName,
  globalsMiddlewares.missingCountryId,
  citiesMiddlewares.cityNotFound,
  citiesMiddlewares.countryNotFound,
  citiesControllers.put
);
citiesRoutes.put(
  "/cities/putByName",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingNewName,
  globalsMiddlewares.missingCountryId,
  citiesMiddlewares.countryNotFound,
  citiesMiddlewares.cityNotFound,
  citiesControllers.put
);

export { citiesRoutes };

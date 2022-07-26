import express from "express";
import { regionsControllers } from "../controllers/regions.js";
import { globalsMiddlewares } from "../middlewares/globals.js";
import { regionsMiddlewares } from "../middlewares/regions.js";

const regionsRoutes = express.Router();

regionsRoutes.get("/regions/findAll", regionsControllers.findAll);
regionsRoutes.get("/regions/findById", globalsMiddlewares.missingId, regionsMiddlewares.regionNotFound, regionsControllers.findOne);
regionsRoutes.get("/regions/findByName", globalsMiddlewares.missingName, regionsMiddlewares.regionNotFound, regionsControllers.findOne);
regionsRoutes.post("/regions/post", globalsMiddlewares.missingName, regionsMiddlewares.nameAlreadyExists, regionsControllers.post);
regionsRoutes.delete("/regions/deleteById", globalsMiddlewares.missingId, regionsMiddlewares.regionNotFound, regionsControllers.delete);
regionsRoutes.delete("/regions/deleteByName", globalsMiddlewares.missingName, regionsMiddlewares.regionNotFound, regionsControllers.delete);
regionsRoutes.put(
  "/regions/putById",
  globalsMiddlewares.missingId,
  globalsMiddlewares.missingNewName,
  regionsMiddlewares.regionNotFound,
  regionsControllers.put
);
regionsRoutes.put(
  "/regions/putByName",
  globalsMiddlewares.missingName,
  globalsMiddlewares.missingNewName,
  regionsMiddlewares.regionNotFound,
  regionsControllers.put
);

export { regionsRoutes };

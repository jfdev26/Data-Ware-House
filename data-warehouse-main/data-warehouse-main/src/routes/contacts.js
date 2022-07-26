import express from "express";
import { contactsControllers } from "../controllers/contacts.js";
import { contactsMiddlewares } from "../middlewares/contacts.js";
import { globalsMiddlewares } from "../middlewares/globals.js";

const contactsRoutes = express.Router();

contactsRoutes.get("/contacts/findAll", contactsControllers.findAll);
contactsRoutes.get(
  "/contacts/findById",
  globalsMiddlewares.missingId,
  contactsMiddlewares.contactNotFound,
  contactsControllers.findOne
);
contactsRoutes.post(
  "/contacts/post",
  globalsMiddlewares.missingFirstName,
  globalsMiddlewares.missingLastName,
  globalsMiddlewares.missingCityId,
  globalsMiddlewares.missingCompanyId,
  globalsMiddlewares.missingRole,
  globalsMiddlewares.missingMedia,
  globalsMiddlewares.missingInterest,
  contactsMiddlewares.alreadyExists,
  contactsControllers.post
);
contactsRoutes.delete(
  "/contacts/deleteById",
  globalsMiddlewares.missingId,
  contactsMiddlewares.contactNotFound,
  contactsControllers.delete
);
contactsRoutes.put(
  "/contacts/put",
  globalsMiddlewares.missingId,
  globalsMiddlewares.missingFirstName,
  globalsMiddlewares.missingLastName,
  globalsMiddlewares.missingCityId,
  globalsMiddlewares.missingCompanyId,
  globalsMiddlewares.missingRole,
  globalsMiddlewares.missingMedia,
  globalsMiddlewares.missingInterest,
  contactsMiddlewares.contactNotFound,
  contactsControllers.put
);

export { contactsRoutes };

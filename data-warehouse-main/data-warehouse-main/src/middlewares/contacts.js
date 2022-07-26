import { contacts } from "../../server/contacts.js";

let response = { success: false, body: null };

const contactsMiddlewares = {
  contactNotFound: async (req, res, next) => {
    response.body = "contact not found";
    (await contacts.findById(req.body)) == "" ? res.send(response) : next();
  },
  alreadyExists: async (req, res, next) => {
    response.body = "contact already exists";
    (await contacts.findByFullName(req.body)) == "" ? next() : res.send(response);
  },
};

export { contactsMiddlewares };

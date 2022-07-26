import { sequelize } from "../../server/server.js";
import { contacts } from "../../server/contacts.js";

let response = { success: true, body: null };

const contactsControllers = {
  findAll: async (req, res) => {
    response.body = await contacts.findAll();
    res.send(response);
  },
  findOne: async (req, res) => {
    response.body = await contacts.findById(req.body);
    res.send(response);
  },
  post: (req, res) => {
    contacts.post(req.body);
    response.body = "successfully posted";
    res.send(response);
  },
  delete: (req, res) => {
    contacts.deleteById(req.body);
    response.body = "successfully deleted";
    res.send(response);
  },
  put: (req, res) => {
    contacts.put(req.body);
    response.body = "successfully upgraded";
    res.send(response);
  },
};

export { contactsControllers };

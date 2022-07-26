import { sequelize } from "../../server/server.js";
import { countries } from "../../server/countries.js";

let response = { success: true, body: null };

const countriesControllers = {
  findAll: async (req, res) => {
    response.body = await countries.findAll();
    res.send(response);
  },
  findOne: async (req, res) => {
    response.body = await countries.findOne(req.body);
    res.send(response);
  },
  post: (req, res) => {
    response.body = "successfully posted";
    countries.post(req.body);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = "successfully deleted";
    countries.delete(req.body);
    res.send(response);
  },
  put: (req, res) => {
    response.body = "successfully updated";
    countries.put(req.body);
    res.send(response);
  },
};

export { countriesControllers };

import { sequelize } from "../../server/server.js";
import { cities } from "../../server/cities.js";

let response = { success: true, body: null };

const citiesControllers = {
  findAll: async (req, res) => {
    response.body = await cities.findAll();
    res.send(response);
  },
  findOne: async (req, res) => {
    response.body = await cities.findOne(req.body);
    res.send(response);
  },
  post: (req, res) => {
    response.body = `successfully posted`;
    cities.post(req.body);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = "successfully deleted";
    cities.delete(req.body);
    res.send(response);
  },
  put: (req, res) => {
    response.body = `successfully updated`;
    cities.put(req.body);
    res.send(response);
  },
};

export { citiesControllers };

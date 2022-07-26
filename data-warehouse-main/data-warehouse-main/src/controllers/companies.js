import { sequelize } from "../../server/server.js";
import { companies } from "../../server/companies.js";

let response = { success: true, body: null };

const companiesControllers = {
  findAll: async (req, res) => {
    response.body = await companies.findAll();
    res.send(response);
  },
  findOne: async (req, res) => {
    response.body = await companies.findOne(req.body);
    res.send(response);
  },
  post: (req, res) => {
    response.body = `successfully posted`;
    companies.post(req.body);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = "successfully deleted";
    companies.delete(req.body);
    res.send(response);
  },
  put: (req, res) => {
    response.body = `successfully updated`;
    companies.put(req.body);
    res.send(response);
  },
};

export { companiesControllers };

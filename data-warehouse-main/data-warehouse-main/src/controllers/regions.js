import { sequelize } from "../../server/server.js";
import { regions } from "../../server/regions.js";

let response = { success: true, body: null };

const regionsControllers = {
  findAll: async (req, res) => {
    response.body = await regions.findAll();
    res.send(response);
  },
  findOne: async (req, res) => {
    response.body = await regions.findOne(req.body);
    res.send(response);
  },
  post: (req, res) => {
    response.body = "successfully posted";
    regions.post(req.body);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = "successfully deleted";
    regions.delete(req.body);
    res.send(response);
  },
  put: (req, res) => {
    response.body = "successfully updated";
    regions.put(req.body);
    res.send(response);
  },
};

export { regionsControllers };

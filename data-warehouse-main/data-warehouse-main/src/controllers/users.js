import { sequelize } from "../../server/server.js";
import { users } from "../../server/users.js";

let response = { success: true, body: null };

const usersControllers = {
  findAll: async (req, res) => {
    response.body = await users.findAll();
    res.send(response);
  },
  findOne: async (req, res) => {
    response.body = await users.findOne(req.body);
    res.send(response);
  },
  post: (req, res) => {
    response.body = `successfully posted`;
    users.post(req.body);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = "successfully deleted";
    users.delete(req.body);
    res.send(response);
  },
  put: (req, res) => {
    response.body = "successfully updated";
    users.put(req.body);
    res.send(response);
  },
  login: (req, res) => {
    response.body = `welcome ${req.body.name}`;
    res.send(response);
  },
};

export { usersControllers };

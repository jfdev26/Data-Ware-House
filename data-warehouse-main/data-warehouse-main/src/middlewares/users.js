import { users } from "../../server/users.js";

let response = { success: false, body: null };

const usersMiddlewares = {
  userNotFound: async (req, res, next) => {
    response.body = "user not found";
    (await users.findOne(req.body)) == "" ? res.send(response) : next();
  },
  userAlreadyExists: async (req, res, next) => {
    response.body = "user already exists";
    (await users.findOne(req.body)) == "" ? next() : res.send(response);
  },
  dataDoNotMatch: async (req, res, next) => {
    response.body = "data do not match";
    (await users.login(req.body)) == "" ? res.send(response) : next();
  },
};

export { usersMiddlewares };

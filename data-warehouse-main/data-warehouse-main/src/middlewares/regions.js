import { regions } from "../../server/regions.js";

let response = { success: false, body: null };

const regionsMiddlewares = {
  regionNotFound: async (req, res, next) => {
    response.body = "region not found";
    (await regions.findOne(req.body)) == "" ? res.send(response) : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    response.body = "region already exists";
    (await regions.findOne(req.body)) == "" ? next() : res.send(response);
  },
};

export { regionsMiddlewares };

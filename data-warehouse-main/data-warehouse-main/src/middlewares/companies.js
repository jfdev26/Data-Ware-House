import { companies } from "../../server/companies.js";

let response = { success: false, body: null };

const companiesMiddlewares = {
  notFound: async (req, res, next) => {
    response.body = "company not found";
    (await companies.findOne(req.body)) == "" ? res.send(response) : next();
  },
  alreadyExists: async (req, res, next) => {
    response.body = "company already exists";
    (await companies.findOne(req.body)) == "" ? next() : res.send(response);
  },
};

export { companiesMiddlewares };

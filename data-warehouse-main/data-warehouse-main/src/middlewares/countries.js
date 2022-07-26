import { countries } from "../../server/countries.js";
import { regions } from "../../server/regions.js";

let response = { success: false, body: null };

const countriesMiddlewares = {
  countryNotFound: async (req, res, next) => {
    response.body = "country not found";
    (await countries.findOne(req.body)) == "" ? res.send(response) : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    response.body = "country already exists";
    (await countries.findOne(req.body)) == "" ? next() : res.send(response);
  },
  regionNotFound: async (req, res, next) => {
    response.body = "region not found";
    (await regions.findOne(req.body)) == "" ? res.send(response) : next();
  },
};

export { countriesMiddlewares };

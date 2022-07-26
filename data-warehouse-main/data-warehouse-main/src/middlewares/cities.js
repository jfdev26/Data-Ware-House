import { cities } from "../../server/cities.js";
import { countries } from "../../server/countries.js";

let response = { success: false, body: null };

const citiesMiddlewares = {
  cityNotFound: async (req, res, next) => {
    response.body = "city not found";
    (await cities.findOne(req.body)) == "" ? res.send(response) : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    response.body = "city already exists";
    (await cities.findOne(req.body)) == "" ? next() : res.send(response);
  },
  countryNotFound: async (req, res, next) => {
    response.body = "country not found";
    (await countries.findOne(req.body)) == "" ? res.send(response) : next();
  },
};

export { citiesMiddlewares };

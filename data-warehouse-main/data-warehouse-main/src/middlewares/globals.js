let response = { success: false, body: null };

const globalsMiddlewares = {
  missingId: (req, res, next) => {
    response.body = "missing id";
    !req.body.id ? res.send(response) : next();
  },
  missingName: (req, res, next) => {
    response.body = "missing name";
    !req.body.name ? res.send(response) : next();
  },
  missingNewName: (req, res, next) => {
    response.body = "missing newName";
    !req.body.newName ? res.send(response) : next();
  },
  missingRegionId: (req, res, next) => {
    response.body = "missing regionId";
    !req.body.regionId ? res.send(response) : next();
  },
  missingCountryId: (req, res, next) => {
    response.body = "missing countryId";
    !req.body.countryId ? res.send(response) : next();
  },
  missingPassword: (req, res, next) => {
    response.body = "missing password";
    !req.body.password ? res.send(response) : next();
  },
  missingFirstName: (req, res, next) => {
    response.body = "missing firstName";
    !req.body.first_name ? res.send(response) : next();
  },
  missingLastName: (req, res, next) => {
    response.body = "missing lastName";
    !req.body.last_name ? res.send(response) : next();
  },
  missingCityId: (req, res, next) => {
    response.body = "missing cityId";
    !req.body.city_id ? res.send(response) : next();
  },
  missingCompanyId: (req, res, next) => {
    response.body = "missing companyId";
    !req.body.company_id ? res.send(response) : next();
  },
  missingRole: (req, res, next) => {
    response.body = "missing role";
    !req.body.role ? res.send(response) : next();
  },
  missingMedia: (req, res, next) => {
    response.body = "missing media";
    !req.body.media ? res.send(response) : next();
  },
  missingInterest: (req, res, next) => {
    response.body = "missing interest";
    !req.body.interest ? res.send(response) : next();
  },
  missingAddress: (req, res, next) => {
    response.body = "missing address";
    !req.body.address ? res.send(response) : next();
  },
  missingEmail: (req, res, next) => {
    response.body = "missing email";
    !req.body.email ? res.send(response) : next();
  },
  missingPhoneNumber: (req, res, next) => {
    response.body = "missing phoneNumber";
    !req.body.phone_number ? res.send(response) : next();
  },
};

export { globalsMiddlewares };

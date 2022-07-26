import { sequelize } from "./server.js";

const companies = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS companies;");
  },
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS companies (" +
        "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
        "name VARCHAR(50) NOT NULL, " +
        "address VARCHAR(50) NOT NULL, " +
        "city_id INT NOT NULL, " +
        "email VARCHAR(50), " +
        "phone_number VARCHAR(50), " +
        "FOREIGN KEY (city_id) REFERENCES cities (id) " +
        "ON DELETE CASCADE " +
        "ON UPDATE CASCADE);"
    );
  },
  insertInto: async () => {
    await sequelize.query(`
    INSERT INTO companies VALUES
    (1, 'Herzog-Kerluke', '53 Bunting Park', 3, 'edurbann0@photobucket.com', '423-425-6167'),
    (2, 'Dooley, Morissette and Corkery', '58 Carberry Terrace', 10, 'msillick1@netlog.com', '986-763-4627'),
    (3, 'Homenick and Sons', '59531 Sycamore Road', 8, 'jtregien2@google.it', '859-712-2823'),
    (4, 'Leuschke-Krajcik', '7 Anderson Way', 9, 'rniccols3@dion.ne.jp', '755-447-9636'),
    (5, 'Koss, Russel and Heaney', '90 Northland Lane', 3, 'adeely4@jiathis.com', '536-532-5674'),
    (6, 'Casper, Dibbert and White', '378 Elka Way', 6, 'wcoopey5@intel.com', '684-923-0985'),
    (7, 'Doyle Inc', '87 Warrior Center', 1, 'nboulds6@networksolutions.com', '764-465-2086'),
    (8, 'Grant Group', '91 Crest Line Center', 6, 'drusso7@1688.com', '294-809-6610'),
    (9, 'Hermann-Bergstrom', '9690 Chive Way', 2, 'lfrancie8@ft.com', '659-159-8499'),
    (10, 'Brown and Sons', '749 Waywood Pass', 3, 'mmabson9@unblog.fr', '256-878-1306'),
    (11, 'Leuschke-Oberbrunner', '736 Harper Lane', 3, 'ejagga@cloudflare.com', '444-942-4334'),
    (12, 'Brekke LLC', '43 Arkansas Hill', 2, 'mchapleob@sbwire.com', '541-508-8715'),
    (13, 'Marks-Pacocha', '983 La Follette Plaza', 1, 'flambolc@imgur.com', '296-596-6309'),
    (14, 'Nienow, Rempel and Effertz', '2121 Old Shore Trail', 1, 'rkollaschekd@imageshack.us', '665-181-3775'),
    (15, 'Parker LLC', '6 Florence Circle', 5, 'sklimpte@rakuten.co.jp', '336-945-7344'),
    (16, 'Lebsack Inc', '192 Veith Pass', 7, 'tsijmonsf@shinystat.com', '740-812-5020'),
    (17, 'Howe-Spencer', '3 Roth Point', 5, 'itomekg@infoseek.co.jp', '599-311-7721'),
    (18, 'Hammes-Emard', '9670 Mockingbird Hill', 5, 'learnshawh@artisteer.com', '630-370-2920'),
    (19, 'Romaguera Group', '4538 Morning Avenue', 8, 'dluffi@sourceforge.net', '385-164-5048'),
    (20, 'Koch, Lindgren and Marvin', '72 Scoville Plaza', 1, 'ncollinettej@illinois.edu', '633-111-5989'),
    (21, 'Yost-Jacobi', '0 Derek Terrace', 9, 'vstammirsk@ucsd.edu', '446-499-5814'),
    (22, 'Dickens Inc', '386 Sunbrook Lane', 4, 'jhilldropl@slate.com', '558-330-6875'),
    (23, 'Huel-Medhurst', '7 Summerview Avenue', 9, 'mrollingsm@netscape.com', '572-618-3083'),
    (24, 'Doyle, Dickens and Mayert', '95724 Swallow Road', 9, 'cperetn@nymag.com', '235-146-4893'),
    (25, 'Rau-Ankunding', '2097 Jenna Drive', 4, 'ikobischo@latimes.com', '800-823-7938'),
    (26, 'Ondricka, Simonis and Schmidt', '12187 Ridgeview Crossing', 4, 'nphillinsp@elpais.com', '911-911-8615'),
    (27, 'Lind-Satterfield', '16 Kropf Crossing', 9, 'disbellq@washingtonpost.com', '344-437-8704'),
    (28, 'Quigley LLC', '19371 Cottonwood Avenue', 9, 'cbraunesr@hugedomains.com', '787-770-9069'),
    (29, 'Reynolds Inc', '6 Northport Lane', 4, 'ffeores@google.fr', '167-600-5405'),
    (30, 'Roberts Inc', '1556 Farmco Junction', 2, 'mgiacovettit@yellowpages.com', '829-673-6932');`);
  },
  findAll: async () => {
    return await sequelize.query(
      "SELECT companies.id AS id, companies.name AS name,companies.address AS address, cities.name AS city_name, " +
        "companies.email AS email, companies.phone_number AS phone_number FROM companies " +
        "INNER JOIN cities ON cities.id = companies.city_id "+"ORDER BY id DESC;",
      { type: "SELECT" }
    );
  },
  findOne: async (data) => {
    return await sequelize.query("SELECT * FROM companies WHERE id = ? OR name = ?;", {
      replacements: [data.id, data.name],
      type: "SELECT",
    });
  },
  post: async (data) => {
    await sequelize.query(
      "INSERT INTO companies " +
        "(name, address, city_id, email, phone_number) " +
        "VALUES (?, ?, ?, ?, ?);",
      {
        replacements: [data.name, data.address, data.city_id, data.email, data.phone_number],
      }
    );
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM companies WHERE id = ? OR name = ?;", {
      replacements: [data.id, data.name],
    });
  },
  put: async (data) => {
    await sequelize.query(
      "UPDATE companies SET " +
        "name = ?, address = ?, city_id = ?, email = ?, phone_number = ? " +
        "WHERE id = ?;",
      {
        replacements: [
          data.name,
          data.address,
          data.city_id,
          data.email,
          data.phone_number,
          data.id,
        ],
      }
    );
  },
};

export { companies };

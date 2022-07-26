import { sequelize } from "./server.js";

const cities = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS cities;");
  },
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS cities ( " +
        "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
        "name VARCHAR(50) NOT NULL, " +
        "country_id INT NOT NULL, " +
        "FOREIGN KEY (country_id) REFERENCES countries (id) " +
        "ON DELETE CASCADE " +
        "ON UPDATE CASCADE);"
    );
  },
  insertInto: async () => {
    await sequelize.query(
      "INSERT INTO cities VALUES" +
        "(1, 'Breves', 3)," +
        "(2, 'Hausjärvi', 3)," +
        "(3, 'Belköl', 4)," +
        "(4, 'Sindangan', 3)," +
        "(5, 'Châlons-en-Champagne', 1)," +
        "(6, 'Lykóvrysi', 1)," +
        "(7, 'Kawm Ḩamādah', 5)," +
        "(8, 'Miguel Hidalgo', 1)," +
        "(9, 'Mar del Plata', 4)," +
        "(10, 'Grästorp', 2);"
    );
  },
  findAll: async () => {
    const sql =
      "SELECT cities.id AS id, cities.name AS name, countries.name AS country_name, regions.name AS region_name FROM cities " +
      "INNER JOIN countries ON countries.id = cities.country_id " +
      "INNER JOIN regions ON regions.id = countries.region_id;";
    return await sequelize.query(sql, { type: "SELECT" });
  },
  findOne: async (data) => {
    return await sequelize.query("SELECT * FROM cities WHERE id = ? OR name = ?;", {
      replacements: [data.id, data.name],
      type: "SELECT",
    });
  },
  post: async (data) => {
    await sequelize.query("INSERT INTO cities (name, country_id) VALUES (?, ?);", {
      replacements: [data.name, data.countryId],
    });
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM cities WHERE id = ? OR name = ?;", {
      replacements: [data.id, data.name],
    });
  },
  put: async (data) => {
    await sequelize.query("UPDATE cities SET name = ?, country_id = ? WHERE id = ? OR name = ?;", {
      replacements: [data.newName, data.countryId, data.id, data.name],
    });
  },
};

export { cities };

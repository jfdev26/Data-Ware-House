import { sequelize } from "./server.js";

const countries = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS countries;");
  },
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS countries ( " +
        "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
        "name VARCHAR(50) NOT NULL, " +
        "region_id INT NOT NULL, " +
        "FOREIGN KEY (region_id) REFERENCES regions (id) " +
        "ON DELETE CASCADE " +
        "ON UPDATE CASCADE);"
    );
  },
  insertInto: async () => {
    await sequelize.query(
      "INSERT INTO countries VALUES" +
        "(1, 'Philippines', 3)," +
        "(2, 'China', 3)," +
        "(3, 'Sweden', 4)," +
        "(4, 'Sri Lanka', 3)," +
        "(5, 'Argentina', 1)," +
        "(6, 'Bolivia', 1)," +
        "(7, 'Ukraine', 5)," +
        "(8, 'Colombia', 1)," +
        "(9, 'Portugal', 4)," +
        "(10, 'Indonesia', 2);"
    );
  },
  findAll: async () => {
    return await sequelize.query(
      "SELECT countries.id AS id, countries.name AS name, regions.id AS region_id, regions.name AS region_name FROM countries " +
        "INNER JOIN regions ON regions.id = countries.region_id",
      { type: "SELECT" }
    );
  },
  findOne: async (data) => {
    return await sequelize.query("SELECT * FROM countries WHERE id = ? OR name = ? OR id = ?;", {
      replacements: [data.id, data.name, data.countryId],
      type: "SELECT",
    });
  },
  post: async (data) => {
    await sequelize.query("INSERT INTO countries (name, region_id) VALUES (?, ?);", {
      replacements: [data.name, data.regionId],
    });
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM countries WHERE id = ? OR name= ?;", {
      replacements: [data.id, data.name],
    });
  },
  put: async (data) => {
    await sequelize.query(
      "UPDATE countries SET name = ?, region_id = ? WHERE id = ? OR name = ?;",
      {
        replacements: [data.newName, data.regionId, data.id, data.name],
      }
    );
  },
};

export { countries };

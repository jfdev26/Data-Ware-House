import { sequelize } from "./server.js";

const regions = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS regions;");
  },
  createTable: async () => {
    await sequelize.query("CREATE TABLE IF NOT EXISTS regions (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL);");
  },
  insertInto: async () => {
    await sequelize.query(
      "INSERT INTO regions VALUES" +
        "(1, 'América del Norte')," +
        " (2, 'América Central')," +
        " (3, 'América del Sur')," +
        " (4, 'África')," +
        " (5, 'Europa')," +
        " (6, 'Oceanía')," +
        " (7, 'Asia');"
    );
  },
  findAll: async () => {
    return await sequelize.query("SELECT * FROM regions WHERE 1;", {
      type: "SELECT",
    });
  },
  findOne: async (data) => {
    return await sequelize.query("SELECT * FROM regions WHERE id = ? OR name = ? OR id = ?;", {
      replacements: [data.id, data.name, data.regionId],
      type: "SELECT",
    });
  },
  post: async (data) => {
    await sequelize.query("INSERT INTO regions (name) VALUES (?);", {
      replacements: [data.name],
    });
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM regions WHERE id = ? OR name = ?;", {
      replacements: [data.id, data.name],
    });
  },
  put: async (data) => {
    await sequelize.query("UPDATE regions SET name = ? WHERE id = ? OR id = ?;", {
      replacements: [data.newName, data.id, data.name],
    });
  },
};

export { regions };

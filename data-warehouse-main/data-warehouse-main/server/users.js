import { sequelize } from "./server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function encripter(string) {
  return jwt.sign(string, process.env.TOKEN);
}

const users = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS users;");
  },
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS users " +
        "(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
        "name VARCHAR(50) NOT NULL, " +
        "password VARCHAR(100) NOT NULL, " +
        "rank INT NOT NULL);"
    );
  },
  insertInto: async () => {
    await sequelize.query(`INSERT INTO users VALUES (1, 'super admin', '${encripter("1234")}', 1), (2, 'user 1', '${encripter("admin")}', 2);`);
  },
  findAll: async () => {
    return await sequelize.query("SELECT * FROM users WHERE 1;", { type: "SELECT" });
  },
  findOne: async (data) => {
    return await sequelize.query("SELECT * FROM users WHERE id = ? OR name = ?;", { replacements: [data.id, data.name], type: "SELECT" });
  },
  post: async (data) => {
    await sequelize.query("INSERT INTO users (name, password, rank) VALUES (?, ?, 2);", {
      replacements: [data.name, encripter(data.password)],
    });
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM users WHERE id = ? OR name = ?;", { replacements: [data.id, data.name] });
  },
  put: async (data) => {
    await sequelize.query("UPDATE users SET name = ?, password = ? WHERE id = ? OR name = ?;", {
      replacements: [data.newName, encripter(data.password), data.id, data.name],
    });
  },
  login: async (data) => {
    return await sequelize.query("SELECT * FROM users WHERE name = ? AND password = ?;", {
      replacements: [data.name, encripter(data.password)],
      type: "SELECT",
    });
  },
};

export { users };

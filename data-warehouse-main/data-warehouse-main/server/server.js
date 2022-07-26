import { Sequelize } from "sequelize";
import { regions } from "./regions.js";
import { countries } from "./countries.js";
import { cities } from "./cities.js";
import { users } from "./users.js";
import { contacts } from "./contacts.js";
import { companies } from "./companies.js";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  logging: false,
  define: {
    freezeTableName: true,
  },
});
await sequelize.authenticate(console.log("sequelize on"));

contacts
  .dropTable()
  .then(() => companies.dropTable())
  .then(() => cities.dropTable())
  .then(() => countries.dropTable())
  .then(() => regions.dropTable())
  .then(() => users.dropTable())
  .then(() => regions.createTable())
  .then(() => regions.insertInto())
  .then(() => countries.createTable())
  .then(() => countries.insertInto())
  .then(() => cities.createTable())
  .then(() => cities.insertInto())
  .then(() => companies.createTable())
  .then(() => companies.insertInto())
  .then(() => contacts.createTable())
  .then(() => contacts.insertInto())
  .then(() => users.createTable())
  .then(() => users.insertInto());

export { sequelize };

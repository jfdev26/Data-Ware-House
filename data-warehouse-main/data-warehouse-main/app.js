import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { countriesRoutes } from "./src/routes/countries.js";
import { regionsRoutes } from "./src/routes/regions.js";
import { citiesRoutes } from "./src/routes/cities.js";
import { usersRoutes } from "./src/routes/users.js";
import { contactsRoutes } from "./src/routes/contacts.js";
import { companiesRoutes } from "./src/routes/companies.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(regionsRoutes);
app.use(countriesRoutes);
app.use(citiesRoutes);
app.use(usersRoutes);
app.use(contactsRoutes);
app.use(companiesRoutes);

const PORT = process.env.PORT || "3001";
app.listen(PORT, console.log(`srv on port: ${PORT}`));

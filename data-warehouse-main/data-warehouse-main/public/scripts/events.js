import { functions } from "./functions.js";
import { dom } from "./dom.js";

const events = {
  companiesBtn: () => {
    document.getElementById("companies-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode(
        "section-main",
        dom.table("companies-table", "Compañías", "companies_post-btn")
      );
      const companies = await functions.fetch("http://localhost:3000/companies/findAll", "GET");
      companies.body.forEach((company) => {
        functions.fillNode("companies-table", dom.tableDataCompanies(company, "table-data-x6"));
      });
      events.companiesPostBtn();
      events.putBtns();
      events.deleteBtns();
    });
  },
  companiesPostBtn: () => {
    document.getElementById("companies_post-btn").addEventListener("click", async () => {
      functions.pop(dom.companiesPost);
      const cities = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
      cities.body.forEach((city) => {
        functions.fillNode("company_post-city_id-select", dom.option(city));
      });
      events.companiesPostSaveBtn();
    });
  },
  companiesPostSaveBtn: () => {
    document.getElementById("company_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("company_name-post-input").value,
        address: document.getElementById("company_address-post-input").value,
        city_id: document.getElementById("company_post-city_id-select").value,
        email: document.getElementById("company_email-post-input").value,
        phone_number: document.getElementById("company_phone_number-post-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/companies/post", "POST", body);
      functions.response(data);
    });
  },
  contactsBtns: () => {
    document.getElementById("contacts-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode(
        "section-main",
        dom.table("contacts-table", "Contactos", "contacts_post-btn")
      );
      const data = await functions.fetch("http://localhost:3000/contacts/findAll", "GET");
      data.body.forEach((contact) => {
        functions.fillNode("contacts-table", dom.tableDataContacts(contact, "table-data-x7"));
      });
      events.expandBtn();
      events.contactsPostBtn();
      events.putBtns();
      events.deleteBtns();
    });
  },
  contactsPostBtn: () => {
    document.getElementById("contacts_post-btn").addEventListener("click", async () => {
      functions.pop(dom.contactPost);
      const cities = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
      cities.body.forEach((city) => {
        functions.fillNode("contact_post-city_id-select", dom.option(city));
      });
      const companies = await functions.fetch("http://localhost:3000/companies/findAll", "GET");
      companies.body.forEach((company) => {
        functions.fillNode("contact_post-company_id-select", dom.option(company));
      });
      events.contactsPostSaveBtn();
    });
  },
  contactsPostSaveBtn: () => {
    document.getElementById("contact_save-post-btn").addEventListener("click", async () => {
      const body = {
        first_name: document.getElementById("contact_first_name-post-input").value,
        last_name: document.getElementById("contact_last_name-post-input").value,
        city_id: document.getElementById("contact_post-city_id-select").value,
        company_id: document.getElementById("contact_post-company_id-select").value,
        role: document.getElementById("contact_role-post-input").value,
        media: document.getElementById("contact_media-post-input").value,
        interest: document.getElementById("contact_interest-post-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/contacts/post", "POST", body);
      functions.response(data);
    });
  },
  usersBtn: () => {
    document.getElementById("users-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode("section-main", dom.table("users-table", "Usarios", "users_post-btn"));
      const data = await functions.fetch("http://localhost:3000/users/findAll", "GET");
      data.body.forEach((user) => {
        functions.fillNode("users-table", dom.tableDataUsers(user, "table-data-x3"));
      });
      events.expandBtn();
      events.userPostBtn();
      events.putBtns();
      events.deleteBtns();
    });
  },
  userPostBtn: () => {
    document.getElementById("users_post-btn").addEventListener("click", () => {
      functions.pop(dom.userPost);
      events.usersPostSaveBtn();
    });
  },
  usersPostSaveBtn: () => {
    document.getElementById("user_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("user_name-post-input").value,
        password: document.getElementById("user_password-post-input").value,
        rank: 2,
      };
      if (
        document.getElementById("user_password_repeat-post-input").value !==
        document.getElementById("user_password-post-input").value
      ) {
        document.getElementById("response")
          ? functions.clearNode("response")
          : functions.fillNode("response-container", dom.response);
        document.getElementById("response").classList.add("response-error");
        functions.fillNode("response", dom.errorIcon);
        functions.fillNode("response", "passwords do not match");
      } else {
        const data = await functions.fetch("http://localhost:3000/users/post", "POST", body);
        functions.response(data);
      }
    });
  },
  onEnter: (buttonId) => {
    window.addEventListener("keyup", (key) => {
      if (key.key == "Enter") document.getElementById(buttonId).click();
    });
  },
  expandBtn: () => {
    document.querySelectorAll(".fa-angle-down").forEach((btn) => {
      btn.addEventListener("click", (element) => {
        document
          .getElementById(element.target.parentElement.parentElement.parentElement.id)
          .classList.toggle("vertical-expand");
        element.target.previousElementSibling.classList.toggle("horizontal-expand");
      });
    });
  },
  loginBtn: () => {
    document.getElementById("login-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("user-name").value,
        password: document.getElementById("password").value,
      };
      const data = await functions.fetch("http://localhost:3000/users/login", "POST", body);
      functions.response(data, "http://127.0.0.1:5500/public/home.html");
    });
  },
  areasBtn: () => {
    document.getElementById("areas-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode(
        "section-main",
        dom.table("regions-table", "Regiones", "regions_post-btn")
      );
      const regions = await functions.fetch("http://localhost:3000/regions/findAll", "GET");
      regions.body.forEach((region) => {
        functions.fillNode("regions-table", dom.tableDataRegion(region, "table-data-x2"));
      });
      functions.fillNode(
        "section-main",
        dom.table("countries-table", "Países", "countries_post-btn")
      );
      const countries = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
      countries.body.forEach((country) => {
        functions.fillNode("countries-table", dom.tableDataCountry(country, "table-data-x3"));
      });
      functions.fillNode("section-main", dom.table("cities-table", "Ciudades", "cities_post-btn"));
      const cities = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
      cities.body.forEach((city) => {
        functions.fillNode("cities-table", dom.tableDataCity(city, "table-data-x4"));
      });
      events.expandBtn();
      events.regionsPostBtn();
      events.countriesPostBtn();
      events.citiesPostBtn();
      events.putBtns();
      events.deleteBtns();
    });
  },
  regionsPostBtn: () => {
    document.getElementById("regions_post-btn").addEventListener("click", () => {
      functions.pop(dom.regionPost);
      events.regionsPostSaveBtn();
      events.onEnter("region_save-post-btn");
    });
  },
  regionsPostSaveBtn: () => {
    document.getElementById("region_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("region_name-post-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/regions/post", "POST", body);
      functions.response(data);
    });
  },
  countriesPostBtn: () => {
    document.getElementById("countries_post-btn").addEventListener("click", async () => {
      functions.pop(dom.countryPost);
      const regions = await functions.fetch("http://localhost:3000/regions/findAll", "GET");
      regions.body.forEach((region) => {
        functions.fillNode("country_post-select", dom.option(region));
      });
      events.countriesPostSaveBtn();
    });
  },
  countriesPostSaveBtn: () => {
    document.getElementById("country_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("country_name-post-input").value,
        regionId: document.getElementById("country_post-select").value,
      };
      const data = await functions.fetch("http://localhost:3000/countries/post", "POST", body);
      functions.response(data);
    });
  },
  citiesPostBtn: () => {
    document.getElementById("cities_post-btn").addEventListener("click", async () => {
      functions.pop(dom.cityPost);
      const countries = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
      countries.body.forEach((country) => {
        functions.fillNode("city_post-select", dom.option(country));
      });
      events.cityPostSaveBtn();
    });
  },
  cityPostSaveBtn: () => {
    document.getElementById("city_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("city_name-post-input").value,
        countryId: document.getElementById("city_post-select").value,
      };
      const data = await functions.fetch("http://localhost:3000/cities/post", "POST", body);
      functions.response(data);
    });
  },
  putBtns: () => {
    document.querySelectorAll(".fa-pencil-alt").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const path = btn.id.split("-")[1];
        const id = btn.id.split("-")[2];
        const name = btn.id.split("-")[3];
        if (path === "regions") {
          functions.pop(dom.putRegion(name));
          events.regionPutSaveBtn(id);
        } else if (path === "countries") {
          functions.pop(dom.putCountry(name));
          const data = await functions.fetch("http://localhost:3000/regions/findAll", "GET");
          data.body.forEach((region) => {
            functions.fillNode("country_put-select", dom.option(region));
          });
          events.countryPutSaveBtn(name);
        } else if (path === "cities") {
          functions.pop(dom.putCity(name));
          const data = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
          data.body.forEach((country) => {
            functions.fillNode("city_put-select", dom.option(country));
          });
          events.cityPutSaveBtn(name);
        } else if (path === "users") {
          functions.pop(dom.putUser(name));
          events.userPutSaveBtn(name);
        } else if (path == "contacts") {
          functions.pop(dom.putContact(name));
          const cities = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
          cities.body.forEach((city) => {
            functions.fillNode("contact_put-new_city_id-select", dom.option(city));
          });
          const companies = await functions.fetch("http://localhost:3000/companies/findAll", "GET");
          companies.body.forEach((company) => {
            functions.fillNode("contact_put-new_company_id-select", dom.option(company));
          });
          events.contactsPutSaveBtn(id);
        } else if (path == "companies") {
          functions.pop(dom.putCompany(name));
          const cities = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
          cities.body.forEach((city) => {
            functions.fillNode("company_put-new_city_id-select", dom.option(city));
          });
          events.companiesPutSaveBtn(id);
        }
      });
    });
  },
  companiesPutSaveBtn: (id) => {
    document.getElementById("company_save-put-btn").addEventListener("click", async () => {
      const body = {
        id: id,
        name: document.getElementById("company-new_name-put-input").value,
        address: document.getElementById("company-new_address-put-input").value,
        city_id: document.getElementById("company_put-new_city_id-select").value,
        email: document.getElementById("company-new_email-put-input").value,
        phone_number: document.getElementById("company-new_phone_number-put-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/companies/put", "PUT", body);
      functions.response(data);
    });
  },
  contactsPutSaveBtn: (id) => {
    document.getElementById("contact_save-put-btn").addEventListener("click", async () => {
      const body = {
        id: id,
        first_name: document.getElementById("contact-new_first_name-put-input").value,
        last_name: document.getElementById("contact-new_last_name-put-input").value,
        city_id: document.getElementById("contact_put-new_city_id-select").value,
        company_id: document.getElementById("contact_put-new_company_id-select").value,
        role: document.getElementById("contact-new_role-put-input").value,
        media: document.getElementById("contact-new_media-put-input").value,
        interest: document.getElementById("contact-new_interest-put-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/contacts/put", "PUT", body);
      functions.response(data);
    });
  },
  userPutSaveBtn: (userName) => {
    document.getElementById("user_save-put-btn").addEventListener("click", async () => {
      const body = {
        name: userName,
        newName: document.getElementById("user-new_name-put-input").value,
        password: document.getElementById("user-new_password-put-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/users/putByName", "PUT", body);
      functions.response(data);
    });
  },
  regionPutSaveBtn: (regionId) => {
    document.getElementById("region_save-put-btn").addEventListener("click", async () => {
      const body = {
        id: regionId,
        newName: document.getElementById("region-new_name-put-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/regions/putById", "PUT", body);
      functions.response(data);
    });
  },
  countryPutSaveBtn: (countryName) => {
    document.getElementById("country_save-put-btn").addEventListener("click", async () => {
      const body = {
        name: countryName,
        newName: document.getElementById("country-new_name-put-input").value,
        regionId: document.getElementById("country_put-select").value,
      };
      const data = await functions.fetch("http://localhost:3000/countries/putByName", "PUT", body);
      functions.response(data);
    });
  },
  cityPutSaveBtn: (cityName) => {
    document.getElementById("city_save-put-btn").addEventListener("click", async () => {
      const body = {
        name: cityName,
        newName: document.getElementById("city-new_name-put-input").value,
        countryId: document.getElementById("city_put-select").value,
      };
      const data = await functions.fetch("http://localhost:3000/cities/putByName", "PUT", body);
      functions.response(data);
    });
  },
  deleteBtns: () => {
    document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
      btn.addEventListener("click", () => {
        functions.pop(dom.confirm);
        sessionStorage.setItem("del", btn.id);
        events.confirmNo();
        events.confirmYes();
      });
    });
  },
  confirmYes: () => {
    document.getElementById("confirm-yes-btn").addEventListener("click", async () => {
      const id = sessionStorage.getItem("del").split("-")[2];
      const path = sessionStorage.getItem("del").split("-")[1];
      const body = { id: id };
      const endPoint = `http://localhost:3000/${path}/deleteById`;
      const data = await functions.fetch(endPoint, "DELETE", body);
      functions.response(data);
    });
  },
  confirmNo: () => {
    document.getElementById("confirm-no-btn").addEventListener("click", () => {
      document.getElementById("pop").remove();
    });
  },
};

export { events };

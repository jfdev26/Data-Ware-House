import { events } from "./events.js";

if (location.href.endsWith("index.html")) {
  events.loginBtn();
  events.onEnter("login-btn");
}
if (location.href.endsWith("home.html")) {
  events.contactsBtns();
  events.usersBtn();
  events.companiesBtn();
  events.areasBtn();
}

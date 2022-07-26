import { dom } from "./dom.js";

const functions = {
  pop: (content) => {
    functions.fillNode("section-main", dom.pop);
    functions.fillNode("pop-container", content);
    document.getElementById("pop").addEventListener("mousedown", (element) => {
      if (element.target.id === "pop") document.getElementById("pop").remove();
    });
  },
  fetch: async (endpoint, method, body) => {
    return await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },
  response: (data, redirect) => {
    document.getElementById("response")
      ? functions.clearNode("response")
      : functions.fillNode("response-container", dom.response);
    if (data.success) {
      document.getElementById("response").classList.remove("response-error");
      functions.fillNode("response", dom.successIcon);
      functions.fillNode("response", data.body);
      setTimeout(() => {
        if (document.getElementById("pop")) document.getElementById("pop").remove();
        if (document.getElementById("regions-table")) document.getElementById("areas-btn").click();
        if (document.getElementById("users-table")) document.getElementById("users-btn").click();
        if (document.getElementById("contacts-table"))
          document.getElementById("contacts-btn").click();
        if (document.getElementById("companies-table"))
          document.getElementById("companies-btn").click();
        if (redirect) location.href = redirect;
      }, 700);
    } else {
      document.getElementById("response").classList.add("response-error");
      functions.fillNode("response", dom.errorIcon);
      functions.fillNode("response", data.body);
    }
  },
  clearNode: (node) => {
    document.getElementById(node).innerHTML = "";
  },
  fillNode: (node, content) => {
    document.getElementById(node).insertAdjacentHTML("beforeend", content);
  },
};

export { functions };

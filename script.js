
"use strict";

const STORAGE_KEY = "peopleInfoRecords_v1";
const SESSION_KEY = "peopleInfoAdminSession_v1";

// Local demo login only — not secure authentication.
const ADMIN_USERNAME = "112233";
const ADMIN_PASSWORD = "112233";

function getRecords() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveRecords(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function loggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === "true";
}

function showMessage(id, message) {
  const el = document.getElementById(id);
  if (el) el.textContent = message;
}

// LOGIN
function loginAdmin(event) {
  event.preventDefault();

  const username = document.getElementById("adminUsername");
  const password = document.getElementById("adminPassword");
  const message = document.getElementById("loginMessage");

  if (!username || !password || !message) {
    alert("Login form is incomplete. Check admin.html.");
    return;
  }

  if (
    username.value.trim() === ADMIN_USERNAME &&
    password.value === ADMIN_PASSWORD
  ) {
    sessionStorage.setItem(SESSION_KEY, "true");

    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");

    message.textContent = "";
    renderAdminRecords();
  } else {
    message.textContent = "Incorrect username or password.";
  }
}

function logoutAdmin() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.reload();
}

// ADD / EDIT
function saveRecord(event) {
  event.preventDefault();

  if (!loggedIn()) {
    alert("Please log in first.");
    return;
  }

  const nameInput = document.getElementById("personName");
  const infoInput = document.getElementById("personInfo");
  const idInput = document.getElementById("recordId");

  const name = nameInput.value.trim();
  const info = infoInput.value.trim();
  const id = idInput.value;

  if (!name || !info) {
    showMessage("adminMessage", "Enter a name and information.");
    return;
  }

  const records = getRecords();

  try {
    if (id) {
      const index = records.findIndex(record => record.id === id);

      if (index < 0) {
        showMessage("adminMessage", "Record not found.");
        return;
      }

      records[index].name = name;
      records[index].info = info;
    } else {
      records.push({
        id: (crypto.randomUUID)
          ? crypto.randomUUID()
          : Date.now().toString() + Math.random().toString(36).slice(2),
        name,
        info,
        createdAt: new Date().toISOString()
      });
    }

    saveRecords(records);
    document.getElementById("recordForm").reset();
    idInput.value = "";

    document.getElementById("formHeading").textContent = "Add Information";
    document.getElementById("saveRecordButton").textContent =
      "Add Information";
    document.getElementById("cancelEditButton").classList.add("hidden");

    showMessage("adminMessage", "Information saved successfully!");
    renderAdminRecords();
  } catch {
    showMessage(
      "adminMessage",
      "Could not save. Check your browser storage."
    );
  }
}

function editRecord(id) {
  if (!loggedIn()) return;

  const record = getRecords().find(item => item.id === id);
  if (!record) return;

  document.getElementById("recordId").value = record.id;
  document.getElementById("personName").value = record.name;
  document.getElementById("personInfo").value = record.info;

  document.getElementById("formHeading").textContent = "Edit Information";
  document.getElementById("saveRecordButton").textContent =
    "Update Information";
  document.getElementById("cancelEditButton").classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteRecord(id) {
  if (!loggedIn()) return;

  if (!confirm("Delete this record?")) return;

  try {
    saveRecords(getRecords().filter(record => record.id !== id));
    renderAdminRecords();
    showMessage("adminMessage", "Record deleted.");
  } catch {
    showMessage("adminMessage", "Could not delete the record.");
  }
}

// RENDER ADMIN RECORDS
function renderAdminRecords() {
  const container = document.getElementById("adminRecords");
  if (!container) return;

  container.replaceChildren();
  const records = getRecords();

  if (!records.length) {
    const empty = document.createElement("p");
    empty.className = "status";
    empty.textContent = "No information added yet.";
    container.appendChild(empty);
    return;
  }

  records.forEach(record => {
    const card = document.createElement("article");
    card.className = "record";

    const title = document.createElement("h3");
    title.textContent = record.name;

    const info = document.createElement("p");
    info.textContent = record.info;

    const actions = document.createElement("div");
    actions.className = "actions";

    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "secondary";
    edit.textContent = "Edit";
    edit.addEventListener("click", () => editRecord(record.id));

    const del = document.createElement("button");
    del.type = "button";
    del.className = "danger";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteRecord(record.id));

    actions.append(edit, del);
    card.append(title, info, actions);
    container.appendChild(card);
  });
}

// USER SEARCH
function initSearch() {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchName");
  const results = document.getElementById("results");

  if (!form || !input || !results) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const query = input.value.trim().toLocaleLowerCase();
    results.replaceChildren();

    if (!query) {
      results.textContent = "Please enter a name.";
      return;
    }

    const matches = getRecords().filter(record =>
      record.name.toLocaleLowerCase().includes(query)
    );

    if (!matches.length) {
      results.textContent = "No information found.";
      return;
    }

    matches.forEach(record => {
      const card = document.createElement("article");
      card.className = "result-card";

      const title = document.createElement("h3");
      title.textContent = record.name;

      const info = document.createElement("p");
      info.textContent = record.info;

      card.append(title, info);
      results.appendChild(card);
    });
  });
}

// STARTUP
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("adminLoginForm");
  const recordForm = document.getElementById("recordForm");
  const logoutButton = document.getElementById("logoutButton");
  const cancelButton = document.getElementById("cancelEditButton");

  if (loginForm) {
    loginForm.addEventListener("submit", loginAdmin);
  }

  if (recordForm) {
    recordForm.addEventListener("submit", saveRecord);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", logoutAdmin);
  }

  if (cancelButton) {
    cancelButton.addEventListener("click", () => {
      recordForm.reset();
      document.getElementById("recordId").value = "";
      document.getElementById("formHeading").textContent = "Add Information";
      document.getElementById("saveRecordButton").textContent =
        "Add Information";
      cancelButton.classList.add("hidden");
      showMessage("adminMessage", "");
    });
  }

  const loginSection = document.getElementById("loginSection");
  const dashboard = document.getElementById("dashboard");

  if (loginSection && dashboard) {
    if (loggedIn()) {
      loginSection.classList.add("hidden");
      dashboard.classList.remove("hidden");
      renderAdminRecords();
    } else {
      loginSection.classList.remove("hidden");
      dashboard.classList.add("hidden");
    }
  }

  initSearch();
});

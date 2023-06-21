const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

if (localStorage.getItem("username")) {
  showUsername();
}

function showUsername() {
  const username = localStorage.getItem("username");
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.value = "";
  showUsername();
}

loginForm.addEventListener("submit", onLoginSubmit);

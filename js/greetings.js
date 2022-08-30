const loginForm = document.querySelector("#login-form ");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(e) {
  e.preventDefault(); //기본행동(새로고침)이 발생되지 않도록 막음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const SavedUserName = localStorage.getItem(USERNAME_KEY);

if (SavedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}

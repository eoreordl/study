const id = document.querySelector("#userId");
const password = document.querySelector("#userPwd");
const button = document.querySelector("#loginBtn");

const SAVE_KEY = "KEY";

const KEY =[];

function savedInformation(event) {
    preventDefault();
    const savedId = id.value;
    const savedPwd = password.value;
    localStorage.setItem("KEY", savedId);
    localStorage.setItem("KEY", savedPwd);
}

button.addEventListener("click", savedInformation);
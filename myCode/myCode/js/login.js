const button = document.querySelector("#loginBtn");

window.localStorage.setItem("id", '1');
window.localStorage.setItem("password", '2');

function loginForm(event) {
    const id = document.querySelector("#userId").value;
    const password = document.querySelector("#userPwd").value;

    const getId = window.localStorage.getItem("id");
    const getPwd = window.localStorage.getItem("password");

    event.preventDefault();

    if(id === getId && password === getPwd) {
        window.location.href = "file:///C:/myCode/search.html"
    }
    else {
        console.log("false");
    }
}


 
button.addEventListener("click", loginForm);

const search = document.querySelector("#search");
const btn = document.querySelector("#button");

const getId = window.localStorage.getItem("id");
const getPwd = window.localStorage.getItem("password");

if(getId !== null && getPwd !== null) {
    console.log("lalala");
}

function searching(evnet) {
    event.preventDefault();
    const searchWording = "http://www.youtube.com/results?search_query=" + search.value;
    search.value = "";
    window.open(searchWording);
}
btn.addEventListener("click", searching);

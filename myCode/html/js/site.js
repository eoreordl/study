const search = document.querySelector("#search");
const btn = document.querySelector("#button");


function searching(evnet) {
    event.preventDefault();
    const searchWording = "http://www.youtube.com/results?search_query=" + search.value;
    search.value = "";
    window.open(searchWording);
}

btn.addEventListener("click", searching);

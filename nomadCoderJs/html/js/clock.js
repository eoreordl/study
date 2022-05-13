const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const nowHours = String(date.getHours()).padStart(2, "0");
    const nowMinute = String(date.getMinutes()).padStart(2, "0");
    const nowSeconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${nowHours}:${nowMinute}:${nowSeconds}`;

    
}



getClock();
setInterval(getClock, 1000);

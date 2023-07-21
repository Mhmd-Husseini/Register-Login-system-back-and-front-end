const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

document.getElementById("username").innerText = username;

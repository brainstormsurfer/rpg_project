const showButton = document.getElementById("showModalBtn");
const closeButton = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

showButton.addEventListener("click", () => overlay.style.display = 'block');
overlay.addEventListener("click", (event) => {if (event.target === overlay || event.target === closeButton) {overlay.style.display = 'none'}})
const display = document.getElementById('keyDisplay');

window.addEventListener('keydown', (event) => {display.textContent = event.key});
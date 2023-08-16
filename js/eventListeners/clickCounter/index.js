const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent)+1})
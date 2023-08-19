
const toggleButton = document.getElementById('toggleButton');

function toggleBackground() {
document.body.classList.toggle('dark')
}

toggleButton.addEventListener('click', toggleBackground);
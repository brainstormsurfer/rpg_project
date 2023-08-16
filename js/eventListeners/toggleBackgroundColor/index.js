const button = document.getElementById('toggleButton');
const container = document.querySelector('.container');

function toggleBackgroundColor(el) {
    const style = el.classList
	if (style.contains('dark')) {
		style.remove('dark');
	} else {
		style.add('dark');
	}
}

button.addEventListener('click', () => toggleBackgroundColor(container));
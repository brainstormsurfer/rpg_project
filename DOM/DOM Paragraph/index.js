const colorPicker = document.getElementById('colorPicker')

function highlight(element) {
    const color = colorPicker.value;
    element.style.backgroundColor = color
}


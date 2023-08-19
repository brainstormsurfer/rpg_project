const pElements = document.querySelectorAll('.highlightable');

pElements.forEach((element) => {
    element.addEventListener('mouseover', function() {
        element.classList.add('highlighted')
    })
    element.addEventListener('mouseout', function() {
        element.classList.remove('highlighted')
    })
})
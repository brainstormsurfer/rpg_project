const keyToDisplay = document.querySelector('#keyDisplay')
const body = document.querySelector('body')

body.addEventListener('keydown', function (e) {
    keyToDisplay.textContent = e.key === ' ' ? 'Space' : e.key     
})
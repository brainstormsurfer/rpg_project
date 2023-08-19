const keyDisplay = document.getElementById('keyDisplay');

document.addEventListener('keydown', function(event) {
    keyDisplay.textContent = event.key
    if(event.key === " "){
        keyDisplay.textContent = "Space"
    }
} )


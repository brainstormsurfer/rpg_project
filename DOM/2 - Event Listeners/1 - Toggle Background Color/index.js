const toggleBtn = document.querySelector('button')

function toggleBackgroundColor() {
    return toggleBtn.classList.toggle('dark')    
}



toggleBtn.addEventListener('click', (event) => {
    event.target = toggleBackgroundColor()    
})
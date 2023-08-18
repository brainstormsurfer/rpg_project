const links = document.querySelectorAll('li')
const message = document.querySelector('.message')
const navbar = document.querySelector('.navbar')

links.forEach((link) => {
    link.addEventListener('click', ({target}) => {        
        message.style.display = 'block'
        message.textContent = target.textContent
        setTimeout(() => {
                message.textContent = ''
                message.style.display = 'none'
            }, 1500);
        })
})


const slides = document.querySelectorAll('img')

let currentIndex = 0
slides[currentIndex].setAttribute('data-id', currentIndex)

const moveSlide = (direction) => {    
    slides[currentIndex].classList.remove('active')    
    currentIndex += direction
    if (currentIndex < 0) {
        currentIndex = 0
    } else if (currentIndex >= slides.length) {
        currentIndex = slides.length - 1
    }        
    slides[currentIndex].setAttribute('data-id', currentIndex)
    slides[currentIndex].classList.add('active')
}

const prevBtn = document.querySelectorAll('buttons')[0]
const nextBtn = document.querySelectorAll('button')[1]


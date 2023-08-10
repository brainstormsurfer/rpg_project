const slides = document.querySelectorAll('img');
let currentIndex = 0;

const moveSlide = (direction) => {
    slides[currentIndex].classList.remove("active");
    currentIndex += direction;
    if (currentIndex < 0) {currentIndex = 4} 
    else if (currentIndex > 4) {currentIndex = 0};
    slides[currentIndex].classList.add("active");
}

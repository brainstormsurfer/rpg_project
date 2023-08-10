const slides = document.querySelectorAll('#slider img')
const currentIndex = 0
function moveSlide(direction) {
    slides[currentIndex].classList.remove('active');
    const newIndex = currentIndex + direction;

    // Check for boundary conditions and adjust the index
    if (newIndex < 0) {
        currentIndex = slides.length - 1; // Wrap to the last image if moving before the first
    } else if (newIndex >= slides.length) {
        currentIndex = 0; // Wrap to the first image if moving after the last
    } else {
        currentIndex = newIndex; // Set the new index
    }
}

function assignButtonHandlers() {
    const prevButton = document.querySelector('.buttons button:first-child');
    const nextButton = document.querySelector('.buttons button:last-child');
    prevButton.addEventListener('click', () => {
        moveSlide(-1); // Move to the previous slide
    });

    nextButton.addEventListener('click', () => {
        moveSlide(1); // Move to the next slide
    });
}

assignButtonHandlers();
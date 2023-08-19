const allCharsAtCarousel = document.querySelectorAll('.character');
let positions = [0, 1, 2];

function updateCarousel() {
    allCharsAtCarousel.forEach((char, index) => {
        const currCharPosition = positions[index];
        const isCenter = (currCharPosition === 1);
        char.style.transform = `translateX(${(currCharPosition - 1) * 180}px) scale(${isCenter ? 1.2 : 1})`;
        char.style.zIndex = isCenter ? '2' : '1';
        char.classList.toggle('character-center', isCenter);
    });
}

allCharsAtCarousel.forEach((char, index) => {
    char.addEventListener('click', () => {
        if (positions[index] === 1) {
            return;
        }

        const clickedPosition = positions[index];
        const rotations = clickedPosition === 0 ? 1 : 2;

        for (let i = 0; i < rotations; i++) {
            positions.push(positions.shift());
        }

        updateCarousel();
    });
});

updateCarousel();
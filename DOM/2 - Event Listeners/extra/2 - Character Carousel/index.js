const characters = document.querySelectorAll(".character");
const positions = [0, 1, 2];

const updateCarousel = () => {
  characters.forEach((character, index) => {
    const pos = positions[index];
    const translation = (pos - 1) * 180;
    const scale = pos === 1 ? "scale(1.2)" : "";
    character.style.transform = `translateX(${translation}px) ${scale}`;
    if (pos === 1) {
      character.style.zIndex = "2";
      character.classList.add("character-center");
    } else {
      character.style.zIndex = "1";
      character.classList.remove("character-center");
    }
  });
};

characters.forEach((character, index) => {
  character.addEventListener("click", () => {
    if (character.classList.contains("character-center")) return;
    const clickedPosition = positions[index];
    const times = clickedPosition === 0 ? 1 : 2;
    for (let i = 0; i < times; i++) {
      positions.push(positions.shift());
    }
    updateCarousel();
  });
});

updateCarousel();

const characters = Array.from(document.querySelectorAll('.character'));
const positions = [0, 1, 2];

function updateCarousel () {
    characters.forEach((character, index)=>{
        const currPosition = positions[index];
        character.style.transform = (currPosition - 1) * 180;
        if(currPosition === 1) {character.classList.add('.character-center')}
        else if (character.classList.character-center) {
            character.classList.remove('.character-center')
        }}
        )
} 


updateCarousel();

characters.forEach((character, index) => {addEventListener("click", () => {
    console.log(character[index]);
    if (character[index] === 1) {return}
    else if (character[index] === 0) {positions.push(positions.shift())
        positions.push(positions.shift())}
})})
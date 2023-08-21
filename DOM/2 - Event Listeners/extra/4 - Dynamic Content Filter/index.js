const userInput = document.querySelector('#filterInput')
const items = document.querySelectorAll('.item')
let words = []
items.forEach((item, index ) => {
    words.push(item.textContent.toLowerCase())
})

userInput.addEventListener('keyup', () => {
    let input = userInput.value.toLowerCase()
    words.forEach((word , index) => {
        if (word.indexOf(input) === -1) {
            items[index].style.display = 'none'
        } else {
            items[index].style.display = 'block'
        }
    })
    
})
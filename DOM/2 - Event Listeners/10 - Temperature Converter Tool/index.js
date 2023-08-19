
const input = document.querySelector('input')

const converter = (btnId) => {
    let inputValue = input.value;
    let parseValue = parseInt(inputValue);

    if (!(input.value) || isNaN(parseValue)) {
        alert('Please enter a number to convert')
    }
    return function() {
        if (btnId === "toCelsius") {
            input.value = (((inputValue)-32)*5/9).toFixed(3)
        } else {
            input.value = (inputValue*1.8+32).toFixed(3)
        }
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', function() {        
        const convert = converter(this.id)
        convert()
    })
})

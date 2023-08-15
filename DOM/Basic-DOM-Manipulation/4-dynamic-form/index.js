const form = document.querySelector('#dynamicForm')
const addButton = document.querySelector('button')
const submitButton = document.querySelector('button[type=button]')

addButton.addEventListener('click', addField())
submitButton.addEventListener('click', submitButton())

function addField() {
    const input = document.createElement('input')
    form.appendChild(input)
}

function submitForm() {    
    let message = ''
    let allFilled = true
    const inputs = document.querySelectorAll('#dynamicForm input')
    inputs.forEach(function(input) {
        if (input.value === '') {
            allFilled = false
        } else {
            allFilled = true
        }
        message += input.value + '\n'
    })
    if (allFilled) {
        alert(message)
    } else {
        alert('Please fill all fields')
    }
}


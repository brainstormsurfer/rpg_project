function addField(){
    const newInput = document.createElement('input');
    dynamicForm.appendChild(newInput);
}

function submitForm() {
    let allFields = true;
    let message = ''
    const inputs = document.querySelectorAll('#dynamicForm input');
     inputs.forEach(input => {
        if(input.value.trim() === ''){
            allFields = false
        } else {
            message += input.value + '\n'
        } 
     })
     if(allFields === true){
        alert('Submitted values:\n' + message );
     } else {
        alert('Please fill in all fields before submitting.');
     }
    
}
const dynamicForm = document.getElementById('dynamicForm');
const addFieldButton = dynamicForm.querySelector('button:first-of-type');
const submitButton = dynamicForm.querySelector('button[type="button"]');
addFieldButton.addEventListener('click', addField);
submitButton.addEventListener('click', submitForm);
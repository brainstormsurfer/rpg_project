const container = document.getElementById("dynamicForm")

const addField = () => {
    const input = document.createElement('input');
    container.appendChild(input);
}

const submitForm = () => {
    const inputs = container.querySelectorAll("input");
    let allFilled = true;
    let message = '';
    inputs.forEach(input => {
        message += `
                    ${input.value}`;
        if (input.value.length === 0) {allFilled = false};
    }) 
    alert(allFilled ? message : 'Fill out all fields');
}
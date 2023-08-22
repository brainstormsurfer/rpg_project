const container = document.querySelector(".container");
const errorMessage = document.querySelector(".error-message");
const url1 = 'https://jsonplaceholder.typicode.com/uses';

fetch(url1).then(res => {if(res.status !== 200){throw new Error(res.error)} else {return res.json()}})
    .then(res => res.forEach(user => {
        const userDiv = document.createElement("div")
        userDiv.classList.add("user");
        userDiv.innerHTML = `
        <h2> ${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>`
        container.appendChild(userDiv);}))
    .catch(error => {errorMessage.textContent = `An error occurred ${error.message} please try again later`;
            console.log(error.message)})


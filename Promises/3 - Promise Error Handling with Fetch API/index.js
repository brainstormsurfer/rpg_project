const usersUrl = "https://jsonplaceholder.typicode.com";
const errorDiv = document.getElementById("error");

fetch(`${usersUrl}/users`)
  .then((response) => {
    if (!response.ok) 
      throw new Error(`Status Code Error: ${response.status}`);
    return response.json()
    })
  .then((data) => {
    const usersDiv = document.getElementById("users");
    for (let user of data) {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
         <h2>${user.name}</h2>
         <p><strong>Email${user.email}</strong></p>         
         `;
      usersDiv.appendChild(userDiv);
    }
  })
  .catch((err) => {
    console.error("Console's Error: ", err);
    const error = document.querySelector(".error-message");
    error.textContent = `An error occurred: ${err.message}. Please try again later`;
  });

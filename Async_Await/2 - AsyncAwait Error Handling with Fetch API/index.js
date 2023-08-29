const usersUrl = "https://jsonplaceholder.typicode.com";
const errorDiv = document.getElementById("error");
const usersDiv = document.getElementById("users");

async function fetchUsers() {
  try {
    const response = await fetch(`${usersUrl}/ushgfers`);
    if (response.status >= 400) throw new Error(`Networking issue,  ${response.status}`);
    const data = await response.json();
    for (let user of data) {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
                  <h2>${user.name}</h2>
                  <p><strong>Email${user.email}</strong></p>         
                  `;
      usersDiv.appendChild(userDiv);
    }
  } catch (err) {
    console.error(err);
  }
}

fetchUsers()
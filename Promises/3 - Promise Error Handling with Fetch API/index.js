const usersUrl = "https://jsonplaceholder.typicode.com";
const errorDiv = document.getElementById("error");

fetch(`${usersUrl}/users`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    }
    const a = response.json();  
    const  arr=[]

    arr.push(a)
    console.log('before',arr[0])
 setTimeout(
  ()=>{
    console.log('after',arr[0])

    arr[0].then(r=>console.log(r)).catch(j=>console.error(j))
  },4000
)
    

    // console.log({a});
    // debugger
    // return a
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
    console.error('Console\'s Error: ', err)
    const error = document.querySelector('.error-message')
    error.textContent = `An error occurred: ${err.message}. Please try again later`
  });

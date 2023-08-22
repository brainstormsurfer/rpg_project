
const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const usersContainer = document.getElementById('users');
const postsContainer = document.getElementById('posts');
const errorMessage = document.getElementById('error');

async function fetchData(url) {
    return (await fetch(url)).json()
}

async function displayData() {
    try{
        const resArray = await Promise.all([fetchData(usersURL), fetchData(postsURL)]);
        try{
            resArray.forEach(dataType => 
            dataType.forEach(data => {
                console.log(data)
                const fillDiv = document.createElement("div")
                fillDiv.classList.add("item");
                
                const innerHtml = resArray.indexOf(dataType) === 0 ? 
                `<strong> ${data.name}</strong><br> ${data.email}` :
                `<strong> ${data.title}</strong><br> ${data.body}`
                fillDiv.innerHTML = innerHtml
    
                const container = resArray.indexOf(dataType) === 0 ? usersContainer : postsContainer;
                container.appendChild(fillDiv);
            } 
            ))
        } 
        catch {errorMessage.textContent = `An error occurred: ${error.message} please try again later`}
    }
    catch {errorMessage.textContent = `An error occurred: ${error} please try again later`}
    
}

displayData();
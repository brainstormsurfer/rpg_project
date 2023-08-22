
const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const usersContainer = document.getElementById('users');
const postsContainer = document.getElementById('posts');
const errorMessage = document.getElementById('error');

const resArray =[];
resArray.push(fetch(usersURL).then(res => {if(res.status !== 200){throw new Error('response not OK')} else {return res.json()}}));
resArray.push(fetch(postsURL).then(res => {if(res.status !== 200){throw new Error('response not OK')} else {return res.json()}}));

Promise.all(resArray).then((resArray)=>{
    console.log(resArray);
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
}).catch(error => {errorMessage.textContent = `An error occurred ${error.message} please try again later`;})


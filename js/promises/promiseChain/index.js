const users = document.getElementById("users");
const container = document.querySelector(".container");
const url1 = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/posts?userId=';

fetch(url1).then(res => {if(res.status !== 200){throw new Error('response not OK')} else {return res.json()}})
    .then(res => res.forEach(user => {
        const userDiv = document.createElement("div")
        userDiv.classList.add("user");
        userDiv.innerHTML = `
        <h2> ${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <div class="posts"></div>`
        container.appendChild(userDiv);
        fetch(`${url2}${user.id}`)
            .then(res => res.json())
            .then(res => {const posts = userDiv.querySelector(".posts")
                            const header = document.createElement("header")
                            posts.appendChild(header);
                            res.forEach(post => {const postDiv = document.createElement("div") 
                                            postDiv.classList.add('post');
                                            postDiv.innerHTML = `<strong>${post.title}</strong>
                                                                <br>${post.body}`
                                            posts.appendChild(postDiv)})})
            .catch(error => console.log(`${error} when processing users posts`)); 
    }))
    .catch(error => console.log(`${error} when handling users`))


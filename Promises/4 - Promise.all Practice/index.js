const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = `${usersUrl}/posts`;


const testRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random()
            if (rand < 0.3){
                reject({status: 404});
            }
            else {
                const pages = {
                    '/users' : [
                        { id: 1, username: 'Bilbo'},
                        { id: 5, username: 'Esmerald'}
                    ],
                    '/about' : 'This is the about page!'
                };                
                const data = pages[url];
                resolve({status: 200, data})                
            }
        }, 1000);
    });
};

testRequest('/about')
.then((res) => {
    console.log('Status Code', res.status);
    console.log('Data', res.data);
    console.log('REQUEST WORKED!');
})
.catch((res) => console.log(res.status))


// fetch(usersUrl)
// .then((response) => {
//     // const test = response.json()
//     const test = response.json()
//     .then(data => {
//         console.log('users1', data)
//         return data
//     })
//     // console.log('users1', test)
//     return test
// })
// .then((data) => console.log('users2', data))
// .catch(err => console.error(err))

// const posts = fetch(postsUrl)
// .then(response => {
//     console.log('posts', response.json())
//     response.json()
// })
// .catch(err => console.error(err))

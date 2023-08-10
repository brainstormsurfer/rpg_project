const users = require('./users.js');

const container = document.querySelector('.container');
const olEl = document.createElement('ol');
olEl.style.listStyleType = 'none';
users.forEach((el) => {
  let liEl =  document.createElement('li');
    liEl.setAttribute('data-id', el.id);
    liEl.textContent = `${el.firstName} ${el.lastName}`
    olEl.appendChild(liEl)
});
container.appendChild(olEl);

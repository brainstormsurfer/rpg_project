const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
  },
];

const container = document.querySelector('.container')
const userList = document.createElement('ol')

userList.style.listStyle = 'none';
users.forEach(user =>{
const listItem = document.createElement('li');
listItem.setAttribute('data-id', user.id); // Set data-id attribute
listItem.textContent = `${user.firstName} ${user.lastName}`;
userList.appendChild(listItem)
});

container.appendChild(userList);
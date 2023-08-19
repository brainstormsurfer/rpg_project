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
]

const targetContainer = document.querySelector('.container')
const olEl = document.createElement('ol')
olEl.style.listStyleType = 'none'
users.forEach(user => {
    const liEl = document.createElement('li')
    liEl.setAttribute('data-id', user.id)
    liEl.textContent = user.firstName + ' ' + user.lastName
    olEl.appendChild(liEl);
})
targetContainer.append(olEl);
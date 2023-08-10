const myLi = document.querySelector('li.start-here')
myLi.textContent = "main title";
const myLiNextSibling = myLi.nextElementSibling;
const myUl = myLiNextSibling.firstElementChild;
const newSubTitle = document.createElement('li')
const subTitleText = document.createTextNode('sub title 4')
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);



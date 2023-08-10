// 2
const myLi = document.querySelector('li.start-here');

// 3
myLi.textContent = 'Main Title';

// 4
const myLiNextSibling = myLi.nextElementSibling;
const myUl = myLiNextSibling.firstElementChild;
const newSubTitle = document.createElement('li');
const subTitleText = document.createTextNode('sub title 4');
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle); 

// 5
const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

// 6
const head = document.head
const title = head.lastElementChild
title.textContent = "DOM Master";

// 7
const div = myLiParent.nextElementSibling
const p = div.firstElementChild
p.textContent = "Now I know how to traverse the DOM :D"


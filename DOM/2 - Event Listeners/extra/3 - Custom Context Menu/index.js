const clickForMenu = document.querySelector('h1');
const cancelMenu = document.querySelector('html')
const contextMenu = document.querySelector('#contextMenu')

const clickMenuItem = (item) => {
    return function() {
        // delay to let the menu disappear 
        setTimeout(() => {
        if (item.id === 'viewDetails') {                
                alert('Viewing some details')
            } else alert('Copying some text')
        }, 50);       
    }
}

const menuItems = document.querySelectorAll('.context-menu-item')
menuItems.forEach(item => {    
    item.addEventListener('click', clickMenuItem(item))
})

clickForMenu.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    contextMenu.style.display = 'block';
})

cancelMenu.addEventListener("click", (e) => {       
    e.preventDefault();
    contextMenu.style.display = 'none'
})

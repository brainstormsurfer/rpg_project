const contextMenu = document.querySelector(".context-menu");
const menuItems = document.querySelectorAll('.context-menu-item');

window.addEventListener("contextmenu", (event)=> {
    event.preventDefault();
    contextMenu.style.display = "block";
    const posx= event.clientX;
    const posy = event.clientY;
    contextMenu.style.top = posy + "px";
    contextMenu.style.left = posx + "px";
});

window.addEventListener("click", () => {contextMenu.style.display = "none";});
menuItems.forEach(item => item.addEventListener("click", () => {alert(`You clicked ${item.id}`)}));
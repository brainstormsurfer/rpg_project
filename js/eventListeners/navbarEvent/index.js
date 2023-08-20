const navlist = document.getElementById("navList");
const message = document.getElementById("message");

navlist.addEventListener("click", (event) => {
    if(event.target.nodeName === "A") {
        const data = event.target.dataset.link;
        console.log(data);
        message.textContent = data;
        message.style.display = "block";
        setTimeout(()=>{ message.style.display = "none"}, 2000);
    }
})
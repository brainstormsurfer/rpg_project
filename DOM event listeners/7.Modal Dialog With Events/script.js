const showModalBtn = document.getElementById('showModalBtn')
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeBtn')

showModalBtn.addEventListener('click', function() {
    overlay.style.display = "block";
})

overlay.addEventListener('click', function(event){
     if(event.target === closeBtn || event.target === overlay){
        overlay.style.display = "none";
     } else {
        overlay.style.display = "block";
     }
})
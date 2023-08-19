const clickButton = document.getElementById('clickButton')
const counterP = document.getElementById('counter')
let counter =0

clickButton.addEventListener('click' , function(){
     counter ++
    counterP.textContent = counter
})

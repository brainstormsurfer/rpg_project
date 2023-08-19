const contextMenu = document.getElementById('contextMenu')
const viewDetails = document.getElementById('viewDetails');
const copyText = document.getElementById('copyText');
document.addEventListener('contextmenu', function(event){
event.preventDefault()
contextMenu.style.left = event.pageX + 'px';
contextMenu.style.top = event.pageY + 'px';
contextMenu.style.display = 'block';
});

document.addEventListener('click', function(event){
if(event.target !== viewDetails && event.target !== copyText){
    contextMenu.style.display = 'none';
} 
});

viewDetails.addEventListener('click', function(){
    alert(`You clicked the View-Details Button`);
    contextMenu.style.display = 'none';     // bonus 
})

copyText.addEventListener('click',function(){
    alert(`You clicked the Copy-Text Button`);
    contextMenu.style.display = 'none'; 
} )





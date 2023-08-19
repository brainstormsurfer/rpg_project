const draggableItem = document.getElementById('item')
const sourceBox = document.getElementById('sourceBox')
const targetBox = document.getElementById('targetBox')

draggableItem.addEventListener('drag', function() {
})
//^^^^ why do i need this eventlistener ? it works without it, is it because we make it draggable in the css ? .. 

targetBox.addEventListener('dragover', function(event){
  event.preventDefault()
});

targetBox.addEventListener('drop', function(event){
  event.preventDefault();
  targetBox.appendChild(draggableItem);
})

sourceBox.addEventListener('dragover', function(event){
  event.preventDefault()
});

sourceBox.addEventListener('drop', function(event){
  event.preventDefault();
  sourceBox.appendChild(draggableItem);
})


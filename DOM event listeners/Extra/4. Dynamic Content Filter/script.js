const filterInput = document.getElementById('filterInput');
const items = document.querySelectorAll('.item');

filterInput.addEventListener('keyup', function(){
    let currInputText = filterInput.value.toLowerCase()
    items.forEach(item => {
        const itemName = item.textContent.toLowerCase();
        if(itemName.indexOf(currInputText) === -1){
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    })
})
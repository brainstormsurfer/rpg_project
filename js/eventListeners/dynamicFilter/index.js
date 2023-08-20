const input = document.querySelector('.filter-input');
const listItems = document.querySelectorAll('.item');
const listItemsArray = Array.from(listItems);

input.addEventListener("keyup" , () => {
    listItemsArray.forEach(item => {
        if(item.textContent.toLowerCase().includes(input.value.toLowerCase())) {
                                item.style.display = "block"
                            } else {
                                item.style.display = "none"
                            }
                            })
                        })
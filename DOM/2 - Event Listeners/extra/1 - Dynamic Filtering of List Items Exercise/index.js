const data = {
  fruits: ["Apple", "Banana", "Cherry"],
  vegetables: ["Carrot", "Broccoli", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
};

const renderItemsHandler = (category) => {
    return function () {        
        const itemsParent = document.querySelector('.items')
        itemsParent.innerHTML = ''
        const itemsArr = data[category]        
        itemsArr.forEach((item) => {
            const itemChild = document.createElement('div')
            itemChild.className = 'item'
            itemChild.innerHTML = item
            itemsParent.appendChild(itemChild)
        })      
    }
}

const categories = document.querySelectorAll('.category')
categories.forEach((item) => {
    item.addEventListener('click', () => {
        const renderItems = renderItemsHandler(item.dataset.category)
        renderItems()
    })
})

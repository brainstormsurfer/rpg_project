const data =
{
    fruits: ['Apple', 'Banana', 'Cherry'],
    vegetables: ['Carrot', 'Broccoli', 'Lettuce'],
    dairy: ['Milk', 'Cheese', 'Yogurt']
};

const categories = document.getElementById('categories');

const items = document.getElementById('items')

categories.addEventListener('click', function (event) {
    const clickedCategory = event.target.getAttribute('data-category')
    const categoryItems = data[clickedCategory];
    renderItems(categoryItems);
})

function renderItems(categoryItems) {
    items.innerHTML = ''
    categoryItems.forEach(item => {
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('item');
        itemDiv.textContent = item;
        items.appendChild(itemDiv);
    })

}
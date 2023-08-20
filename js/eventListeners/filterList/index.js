const data = {
    fruits: ["apple", "banana", "cherry"],
    vegetables: ["carrot", "broccoli", "lettuce"],
    dairy: ["milk", "cheese", "yogurt"]
}

const container = document.getElementById("categories");
const list = document.getElementById("items")

function showCategory (category) {
    list.innerHTML = '';
    for (item of data[category]) {
        const listItem = document.createElement("div");
        listItem.className = "item";
        listItem.innerHTML = `${item}`;
        list.appendChild(listItem);
    }
}

container.addEventListener("click", (event) => {
    showCategory(event.target.dataset.category);
})
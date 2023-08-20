const sourceBox = document.getElementById("sourceBox");
const targetBox = document.getElementById("targetBox");
const dragItem = document.getElementById("item");

dragItem.addEventListener("dragstart", (event) => {event.dataTransfer.setData("text", event.target.id)})
sourceBox.addEventListener("dragover", (event) => {event.preventDefault()});
sourceBox.addEventListener("drop", (event) => {event.preventDefault()
                                            event.target.appendChild(dragItem)});
targetBox.addEventListener("dragover", (event) => {event.preventDefault()});
targetBox.addEventListener("drop", (event) => {event.preventDefault()
                                            event.target.appendChild(dragItem)});
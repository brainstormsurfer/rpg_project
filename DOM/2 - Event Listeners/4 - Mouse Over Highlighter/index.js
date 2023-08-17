const pElements = document.querySelectorAll(".highlightable");

pElements.forEach((el) => {
let timeoutId
  el.addEventListener("mouseover", () => {
    timeoutId = setTimeout(() => {        
        el.classList.add('highlighted')
        el.classList.remove("highlightable");
    }, 100);
  })

  el.addEventListener("mouseout", () => {
    clearTimeout(timeoutId)
        el.classList.remove('highlighted')
        el.classList.add("highlightable");
  })
})
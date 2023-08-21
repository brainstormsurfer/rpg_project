const tools = document.querySelectorAll(".tool");
const canvas = document.getElementById("drawingArea");
const ctx = canvas.getContext("2d");

function drawShape(shape) {
    return (event) => {
        ctx.beginPath();
        if (shape === "rectangle") {
            ctx.rect(event.clientX, event.clientY, 80, 50);
        } else if (shape === "circle") {
            ctx.arc(event.clientX, event.clientY, 50, 0, 2 * Math.PI);
        }
        ctx.stroke();
    };
}

tools.forEach((item) => {
    const shape = item.dataset.tool;
    item.addEventListener("click", (event) => {
        canvas.addEventListener("click", drawShape(shape), {once : true});
    });
});



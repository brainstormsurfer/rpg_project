const tools = document.querySelectorAll(".tool");
const canvas = document.getElementById("drawingArea");
const ctx = canvas.getContext("2d");

function drawShape(shape) {
    console.log("in shape")
    return (event) => {
        ctx.beginPath();
        if (shape === "rectangle") {
            console.log("in rectangle");
            ctx.rect(event.clientX, event.clientY, 200, 150);
        } else if (shape === "circle") {
            ctx.arc(event.clientX, event.clientY, 50, 0, 2 * Math.PI);
        }
        ctx.stroke();
    };
}

tools.forEach((item) => {
    const shape = item.dataset.tool;
    item.addEventListener("click", () => {
        console.log(shape);
        canvas.addEventListener("click", () => {drawShape(shape)});
    });
});


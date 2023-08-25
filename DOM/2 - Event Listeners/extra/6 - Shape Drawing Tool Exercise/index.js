const tools = Array.from(document.querySelectorAll('.tool'))
const canvas = document.getElementById('drawingArea');

const ctx = canvas.getContext("2d");

const drawShape = (shape) => {    
    return function(event) {        
        ctx.beginPath();

        if (shape === "rectangle") {
            const rectWidth = 100;
            const rectHeight = 50;
            const x = event.clientX - canvas.getBoundingClientRect().left - rectWidth / 2;
            const y = event.clientY - canvas.getBoundingClientRect().top - rectHeight / 2;
            ctx.rect(x, y, rectWidth, rectHeight);
        } else {
            const radius = 40;
            const x = event.clientX - canvas.getBoundingClientRect().left;
            const y = event.clientY - canvas.getBoundingClientRect().top;
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
        }
        
        ctx.stroke();
    }
}

tools.forEach((tool) => {
    const shape = tool.dataset.tool;
    tool.addEventListener('click', () => {
        const draw = drawShape(shape);
        canvas.addEventListener('click', draw)})
})
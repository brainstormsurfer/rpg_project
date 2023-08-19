const tools = document.querySelectorAll('.tool');
const canvas = document.getElementById('drawingArea');

const ctx = canvas.getContext("2d")
function drawShape(shape){
    return function(event) {
        const canvasRect = canvas.getBoundingClientRect();
        const x = event.clientX - canvasRect.left;
        const y = event.clientY - canvasRect.top;

        ctx.beginPath();
        if (shape === 'rectangle') {
            ctx.rect(x, y, 60, 30);
        } else if (shape === 'circle') {
            ctx.arc(x, y, 30, 0, Math.PI * 2);
        }
        ctx.stroke();
    };
}

tools.forEach(tool => {
    const shape = tool.dataset.tool;
    tool.addEventListener('click', function(){
        canvas.addEventListener('click', drawShape(shape),{ once: true });
    });
})
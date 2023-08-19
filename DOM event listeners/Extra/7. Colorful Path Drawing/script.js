const canvas = document.getElementById('drawingArea');
const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', function (event) {
    isDrawing = true;
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
});

function trackMousePath() {
    let prevX = 0;
    let prevY = 0;
    return function (event) {
        if (!isDrawing) return;
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;
        if (prevX === 0 && prevY === 0) {
            prevX = x;
            prevY = y;
        }
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);

        const hue = Math.random() * 360;
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.stroke();

        prevX = x;
        prevY = y;
    };
}

const drawPath = trackMousePath();

canvas.addEventListener('mousemove', function (event) {
    drawPath(event);
});


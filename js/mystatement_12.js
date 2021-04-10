
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

function drawLine(p0, p1, color="black"){
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p0.x, p1.y);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawTriangle(p0, p1, p2) {
    drawLine(p0, p1)
    drawLine(p1, p2)
    drawLine(p2, p0)
}

function drawFract(p0, p1, p2, limit){
    if(limit > 0){
        const pA = {
           x: p0.x + (p1.x - p0.x)/2,
           y: p0.y - (p0.y - p1.y)/2
        };
        const pB = {
           x: p1.x + (p2.x - p1.x)/2,
           y: p1.y - (p1.y - p2.y)/2
        };
        const pC = {
           x: p0.x + (p2.x - p0.x)/2,
           y: p0.y
        };        drawFract(p0, pA, pC, limit-1);
        drawFract(pA, p1, pB, limit-1);
        drawFract(pC, pB, p2, limit-1);
    }
    else {
        drawTriangle(p0,p1,p2);
    }
}

drawFract(1, 1, 1, 20)

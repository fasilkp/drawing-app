const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
ctx.fillStyle="white";
ctx.fillRect(0,0,1270, 520);

let brushColor = "black";
let brushSize = "3";
function color(){
    brushColor="#fff";
}

document.getElementById('color').addEventListener("change", function(){
    brushColor = this.value;
});

document.getElementById('thickness').addEventListener("mouseup", function(){
    document.getElementById('thicknessValue').innerHTML=this.value
    brushSize = this.value;
});

let painting=false;

function paintingStart(e){
    painting = true;
    draw(e);
}

function paintingEnd(e){
    painting = false;
    ctx.beginPath();
}

function draw(e){
    if(painting==false) return;
    let x= e.clientX - canvas.offsetLeft;
    let y= e.clientY - canvas.offsetTop;
    ctx.lineWidth=brushSize;
    ctx.lineCap="round";
    
    ctx.lineTo(x,y);
    ctx.strokeStyle=brushColor;
    ctx.stroke();

    
}

canvas.addEventListener("mousedown",paintingStart);
canvas.addEventListener("mouseup",paintingEnd);
canvas.addEventListener("mousemove",draw);



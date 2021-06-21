console.log("This is index.js file");

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  let x = 30;
  let y = 20;
 canvas.addEventListener("mousemove",(e)=>{
    let context = canvas.getContext("2d");
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    context.beginPath();
    context.moveTo(0,0);
    let line = context.lineTo(e.clientX,e.clientY);
    context.strokeStyle=`#${randomColor}`;
    context.stroke();
    canvas.innerHTML = line;

 })

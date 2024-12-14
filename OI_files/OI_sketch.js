//declare circle arrays
let circle_array = [];
let circleY_array = [];
let circle_colorR = [];
let circle_colorG = [];
let circle_colorB = [];
let interval = 30;

function setup() {
  createCanvas(600, 600);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(220);

  let r= random([0,255]);
  let g= random([0,255]);
  let b= random([0,255]);

  //Add a new circle every every 30 frames
  if (frameCount % interval === 0) {
    circle_array.push(0);
    circleY_array.push(0);
    circle_colorR.push(r);
    circle_colorG.push(g);
    circle_colorB.push(b);
  }

  //Update and display all circles
  for (let i = 0; i < circle_array.length; i++) {
    circleY_array[i] += 3;
    circle_array[i] += 0.05;
    circle_colorR[i] += 0;
    circle_colorG[i] += 0;
    circle_colorB[i] += 0;

    drawCircle(circle_array[i],circleY_array[i],circle_colorR[i],circle_colorB[i], circle_colorG[i]);
  }
}

//Code Reference: https://editor.p5js.org/ronikaufman/sketches/zyrZpaSQl
function drawCircle(circle_array, circleY_array, circle_colorR,circle_colorB,circle_colorG) {
// circle_colorR = ['#9A0086','#000000','#ffffff','#ADADAD','#FD0C94','#00BBFD','#FDC820'];
  push();
  translate(width / 2, height / 2 - circleY_array);
  scale(circle_array);
  let y = 3 * (cos(100) + sin(100 / 2)) + 110;
  rotate(45);
  fill(circle_colorR, circle_colorG, circle_colorB);
  
//   for(let i=0; i<=circle_colorR.length-1; i++){
//     if(i===circle_colorR.length-1){
//       i=0;
//     }
//     else{
//       i++;    
//     }
//     fill(circle_colorR[i])
    square(0, 0, y);
    circle(y / 2, 0, y);
    circle(0, y / 2, y);
//    console.log(circle_colorR[i])
   
//   }

 
  pop();
}



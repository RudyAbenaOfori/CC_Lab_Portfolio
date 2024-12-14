let rad = 30;
let tad = 0;
let x;
let y;
let r;
let g;
let b;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  
}

function draw() {
  //Background color
  background("rgb(252, 199, 168)");
  
  //color, size and stroke for face and ears
  stroke ('#FFF9EB');
  strokeWeight(3);
  fill('#F9C79D')
  fill(r,g,b);   
    
  
  //ear rotation
  push()
  rotate(-29.69);
  ellipse(8, 230, 20, 26);
  rotate(50);
  ellipse(328, 87, 20, 26);
  pop()
  
  //face
  ellipse(200, 180, 153, 131);
  
  //eyes
  // rad = random (16,36)
  fill('#79412A')
  noStroke();
  circle(165, 175, 36);
  circle(235, 175, 36);
  
  //eye highlights
  fill('#ffffff')
  translate(2,-4)
  // tad = random (15,18);
  circle(235, 175, 18);
  // translate(0,0)
  circle(165, 175, 18);
  cad = random (2,6);
  translate(-13,16)
  circle(165, 175, cad);
  translate(0,-1)
  circle(235, 175, cad);
  
  //blushing cheeks
  fill('#F26463')
  rad = random(9,13);
  ellipse(165, 190, 25, rad);
  ellipse(255, 190, 25, rad);
  
  //mouth
  x = mouseX / 10;
  y = mouseY / 10
  ellipse(210, 210, x, y);
  
  //smile ellipse
  fill('#F9C79D')
  fill(r,g,b); 
  ellipse(210, 195, x, y);
  
  //hair
  fill('#8F8373')
  rotate(30)
  rect(230, -11, 5, 30, 2);
  rect(242, -19, 5, 30, 5);
  rect(254, -25, 5, 30, 5);
  
  
  
}
function mousePressed()
  { 
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
  }
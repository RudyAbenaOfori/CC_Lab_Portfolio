function setup() {
  //size of canvas
  createCanvas(400, 400);
  //setup for rotation and translation
  angleMode(DEGREES)
}

function draw() {
  background('#f7f7f7');
  //makeshift gradient background
  push()
  noStroke();
  blendMode(DARKEST)
  fill('#FFFAD7');
  rect(0, 0, 400, 60);
  fill('#FFF3D0');
  rect(0, 50, 400, 60);
  fill('#FFEDC9');
  rect(0, 100, 400, 60);
  fill('#F2E0CD');
  rect(0, 150, 400, 60);
  fill('#E6D5D1');
  rect(0, 200, 400, 60);
  fill('#DACAD3');
  rect(0, 250, 400, 60);
   fill('#CFC0D6');
  rect(0, 300, 400, 60);
  fill('#C4B5D8');
  rect(0, 350, 400, 60);
  pop()

  
  push()
  //base comb rectangle
  fill('#F57B9E');
  //no border
  noStroke('');
  //center position
  translate(90,-49)
  //slight tilt
  rotate(-28)
  //comb fingers (pink)
  rect(-55, 199.5, 70, 131, 10);
  noStroke();
  rect(-19, 200, 35, 10, 4);
  rect(-19, 220, 35, 10, 4);
  rect(-19, 240, 35, 10, 4);
  rect(-19, 260, 35, 10, 4);
  rect(-19, 280, 35, 10, 4);
  rect(-19, 300, 35, 10, 4);
  rect(-19, 320, 35, 10, 4);
  
  push()
  //comb gaps (blended)
  noStroke();
  //fill('#F7f7f7');
  fill('#FFEDC9');
  rect(-20, 210, 37, 10, 3);
  fill('#F2E0CD');
  rect(-20, 230, 37, 10, 3);
  rect(-20, 250, 37, 10, 3);
  rect(-20, 270, 37, 10, 3);
  fill('#E6D5D1');
  rect(-20, 290, 37, 10, 3);
  rect(-20, 310, 37, 10, 3);
  pop()
  
  pop()
  
  
}
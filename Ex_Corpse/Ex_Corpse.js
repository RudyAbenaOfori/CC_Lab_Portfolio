rad = 20;
function preload() {
  img = loadImage('/image 516.png');
}
function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
  // background(220);
  // blendMode(SUBTRACT);
   
  //bg_gradient
  push()
  fill('#341448');
  noStroke();
  rect(0,0,400,200)
  pop()
  
  push()
  fill('#411A56');
  noStroke();
  rect(0,150,400,200)
  pop()
  
  push()
  fill('#4F2262');
  noStroke();
  rect(0,300,400,200)
  pop()
  
  push()
  fill('#652D76');
  noStroke();
  rect(0,450,400,200)
  pop()
  
  image(img, 20, 525, 50, 50)
  image(img, 50, 50, 50, 50)
  image(img, 290, 50, 50, 50)
  image(img, 70, 250, 50, 50)
  image(img, 265, 250, 50, 50)
  image(img, 330, 525, 50, 50)
  image(img, 150, 545, 50, 50)
  image(img, 200, 545, 50, 50)
}

function draw() {
  
  
  
  //Petals design
  //Petal 1
  push()
  fill('#558DBB');
  rotate(20);
  ellipse(180,35,70, 60);
  pop()
  
  //petal 3
  push()
  fill('#558DBB');
  rotate(-20);
  ellipse(192,170,70, 60);
  rotate(80);
  rect(200,-185,0,35)
  pop()
  
  //Petal 2
  push()
  fill('#558DBB');
  ellipse(198,57,60, 70);
  pop()
    
  //Petal 2 line
  rect(200,30,0,35)
  
  //neck
  push()
  fill('#CEEAFF');
  noStroke();
  rect(180,160,40,40)  
  fill('#411A56')
  ellipse(157,175,60, 70);
  ellipse(240,175,60, 70);
  pop()
  
   //Petal 4
  push()
  fill('#558DBB');
  rotate(-45);
  ellipse(15,210,70, 60);
  rotate(-15);
  rect(0,161,0,35)
  pop()
  
  //Petal 6
  push()
  fill('#558DBB');
  rotate(50);
  ellipse(260,-95,70,60);
  rect(208,-51,0,35)
  rotate(-97);
  rect(63,250,0,35)
  pop()
  
  //Petal 5
  push()
  fill('#558DBB');
  ellipse(200,143,60, 70);
  pop()
  
  //Petal 5 line
  rect(200,135,0,35)
  
  //face design
  //Face circle
  push()
  fill('#CEEAFF');
  circle(200,100, 70);
  pop()
    
  
  //eyebrow left
  push()
  fill('#CEEAFF');
  ellipse(184,87,21, 9)
  noStroke();
  // fill('black');
  ellipse(184,89,24, 9)
  pop()
  
  
  //eyelid left
  push()
  fill('#CEEAFF');
  ellipse(184,93,21, 9);
  
  //eyeball left
  fill('#ffffff');
  ellipse(184,95,20, 7);
  
  //iris left
  fill('#AAADAE');
  ellipse(184,95,10, 7);
  pop()
  
  
  //eyebrow right 
  push()
  fill('#CEEAFF');
  ellipse(216,86,21, 9); 
  noStroke();
  // fill('black');
  ellipse(216,88,24, 9);
  pop()
  
  //nose
  push()
  fill('#CEEAFF');
  ellipse(201,109,18, 9);
  noStroke()
  // fill('black')
  // ellipse(201,103,22, 11);
  ellipse(201,110,11, 10);
  pop()
  ellipse(201,113,6, 5);
  push()
  fill('#CEEAFF');
  noStroke()
  ellipse(201,103,22, 11);
  ellipse(201,116,11, 8);
  pop()
  
  
  //eylid right
  push()
  fill('#CEEAFF');
  ellipse(216,93,21, 9);
  
  //eyeballright
  fill('#ffffff');
  ellipse(216,95,20, 7);
  
  //iris right
  fill('#AAADAE');
  ellipse(216,95,10, 7);
  pop()
  
  
  //mouth
  push()
  fill('#CEEAFF');
  ellipse(201,119,22, 8);
  noStroke();
  ellipse(201,117,22, 8);
  pop()
  push()
  noFill();
  ellipse(201,123,12, 8);
  pop()
  
  //Shoulders
  push()
  fill('#CEEAFF');
  noStroke()
  rect(140,200,115,40,30,30,0,0)
  pop()
  
  //arm-left
  push()
  fill('#CEEAFF');
  noStroke()
  // rect(140,240,20,40)
  quad(140, 215, 165, 215, 150, 300, 125, 295);
  pop()
  
  //left hand
  push()
  fill('#CEEAFF');
  noStroke();
  rotate(-45);
  ellipse(-195, 350,30, 20);
  pop()
  push()
  fill('#FAF8F2');
  quad(125, 295, 151, 295, 129, 370, 105, 370);
  pop()
  
  
  //arm-right
  push()
  fill('#FAF8F2');
  quad(230, 215, 255, 215, 270, 300, 245, 300);
  ellipse(244,215,30, 20);
  ellipse(245,227,30, 20);
  quad(245, 300, 271, 300, 298, 370, 275, 370);
  ellipse(258,300,30, 20);
  pop()
  
  //Right Hand
  push()
  fill('#CEEAFF');
  noStroke();
  rotate(50);
  ellipse(483,25, 30,20);
  pop()
  
  //Dress design
  push()
  fill('#FAF8F2');
  ellipse(178,240,45, 35);
  ellipse(218,240,45, 35);
  quad(155, 237, 241, 237, 229, 300, 170, 300);
  quad(170, 300, 229, 300, 305, 450, 220, 450);
  quad(170, 300, 205, 300, 185, 450, 100, 450);
  pop()
  
  //legs
  push()
  noFill();
  stroke('#FAF8F2')
  quad(100, 450, 305, 450, 360, 550, 50, 550);
  pop()
  
  create_stars(mouseX,mouseY,rad);
  
}

function create_stars(x,y,rad){
  
  a = rad/3
  // x=mouseX;
  // y=mouseY;
  for(let i =0; i*a<=width; i++){
    fill('#A4BCD5')
     circle(i*x, i*y, a);
     // if(mouseIsPressed & i%2){}
   }
}


//Declare time variables 
let h, m, s, ms;
//Declare framerate variable 
let fr_rate;
//Declare variable for moving function
let x1, y1; 
let q,r,p,t;
var pressed = false;


function setup() {
  createCanvas(400, 400);
//Assign frame rate variable
  fr_rate = 10;
//Assign moving function variables
  x1 = y1 = 50;
}



function draw() {
//Canvas bg-color
  background("#D9BEA0");
//Canvas frame rate 
  frameRate(fr_rate);

//Assign time variables  
  m = minute();
  h = hour();
  s = second();
  ms = millis();
  q = "#202125"
  r = "#E5BFD0"
  t = "#B17EB9"
  let u = hour_button(q,r,t);
  // u = createButton()
  
 
// //Hour hourglass button  
//   push() 
//   fill("#202125");
//   text("H", 85, 125);
//   noStroke();
//   fill("#E5BFD0");
//   circle(60, 120, 25);
//   fill("#B17EB9");
//   circle(60, 120, 10);
//   pop()
 
//Minute hourglass button  
  push()
  fill("#202125");
  text("M", 85, 165);
  noStroke();
  fill("#F7D255");
  circle(60, 160, 25);
  fill("#E8B22B");
  circle(60, 160, 10);
  pop()
  
//Seconds hourglass button  
  push()
  fill("#202125");
  text("S", 85, 205);
  noStroke();
  fill("#FCBD70");
  circle(60, 200, 25);
  fill("#EB811E");
  circle(60, 200, 10);
  pop()
  
//Declare variable time_now to print time on screen
  fill("#202125");
  let time_now = s+ ' seconds ';
//Text size  
  textSize(25);
//Text position  
  text(time_now, 130, 320);
  textSize(17);
//Heading  
  text("The Sands Of Our Time", 105, 345);
//Falling sand animation call
  y1 = move_down(y1, 3);
//Declare radii for Sand circles mapped to the time
  rad = map(s, 0, 59, 100, 10);
  dar = map(s, 0, 59, 10, 100);
  man = map(m, 0, 59, 100, 10);
  nam = map(m, 0, 59, 10, 100);
  hur = map(h, 0, 23, 100, 100);
  hur = map(h, 0, 23, 10, 100);
  
    
//Hourglass design
//Initial/Base hourglass circles  
  push()
  stroke("#304A5D");
  strokeWeight(4);
  // pop()
  // push()
  fill('#DFF0EA')
  circle(200, 100, 100);
  circle(200, 220, 100);
  pop()
  
//Hourglass shadow circles    
  push()
  fill('#CDD4D5')
  circle(200, 100, 100);
  circle(200, 220, 100);
  noStroke();
  fill('#DFF0EA')
  circle(195, 101, 88);
  circle(195, 220, 88);
  pop()
  
//Sand circles
  push()
  strokeWeight(1)
  fill('#F79F4D')
  
  // circle(200, 100, rad);
  // circle(200, 220, dar);
  let SC = sand_circles_s();
  pop()
  
 //Middle of hourglass
  push()
  fill('#DFF0EA')
  noStroke();
  rect(175,140,50,40);
  pop()
  
//function for creating moving sand particle
  // push()
  // strokeWeight(2);
  draw_circles(x1, y1, 300, 50 );
  // pop()
  
//leftside of hourglass waist  
  push()
  fill("#D9BEA0");
  stroke("#304A5D");
  strokeWeight(2);
  ellipse(148, 160, 80, 43);
  noStroke();
  rect(104,137,75,46,24);
  pop() 
  
//Right side of hourglass waist  
  push()
  fill("#D9BEA0");
  stroke("#304A5D");
  strokeWeight(3);
  ellipse(251, 160, 80, 43);
  noStroke();
  rect(222,137,75,46,22);
  pop()
  
//Hiding top rectangle
  push()
  fill("#D9BEA0");
  noStroke();
  rect(152,25,95,46);
  pop()
  
//Covering top wooden pallets  
  push()
  fill('#312F3C')
  rect(154,60,91,5);
  // rect(154,256,91,5);
  pop()
  push()
  fill('#5D3840')
  rect(157,65,85,5);        
  pop()

//Hiding bottom rectangle     
  push()
  fill("#D9BEA0");
  noStroke();
  rect(152,255,95,24);
  pop()

//Bottom shadowing ellipse 
  push()
  fill("rgba(38,40,60,0.9)"); 
  noStroke();
  ellipse(200, 268, 120, 5);
  pop()     

//Covering top and bottom light brown pallets      
  push()
  fill("#EDB985")
  rect(147,50,104,10,10);
  rect(148,256,104,10,10);
  rect(157,251,85,5);
  // pop()
  rect(153,54,92,0);
  rect(153,57,92,0);
  pop()

//pallet top and bottom shadows  
  push()
  noStroke();
  fill("rgba(38,40,60,0.9)")
  rect(246, 50, 5, 10, 2, 20, 20, 2);
  rect(247, 256, 5, 10, 2, 20, 20, 2);
  fill("rgba(38,40,60,0.5)")  
  rect(220, 51.5, 27, 3);
  rect(232, 54, 15, 5);
  rect(214, 57, 32, 5);
  rect(215, 252, 27, 4);
  rect(232, 256, 15, 5);
  rect(226, 260, 22, 5);  
  pop()
  
//Pallet lines  
  push()
  rect(154,260,92,0);
// fill(38,40,60,0.2); 
  fill("rgba(38,40,60,0.7)");
  rect(154,263,92,2);
  pop()   

}


function hour_button(q,r,t){
  //Hour hourglass button 
  textSize(13);
  push() 
  fill(q);
  text("H", 85, 125);
  noStroke();
  fill(r);
  circle(60, 120, 25);
  fill(t);
  circle(60, 120, 10);
  pop()
  
  this.clicked = function(){
    SC = sand_circles_h()
  }

}

function mousePressed(){
  hour_button(q,r,t).clicked();
}


function sand_circles_s(){
  circle(200, 100, rad);
  circle(200, 220, dar);
}

function sand_circles_h(){
  hur = map(h, 0, 23, 100, 100);
  ruh = map(h, 0, 23, 10, 100);
}

//function for drawing motion circle
function draw_circles(x,y, a,b, rad=10){
  fill('#F79F4D')
  // circle(x, y, rad);
  circle(x+150, y+100, rad/2);
  // rect(x, y, a, b);  
}

function move_down(y, speed=5)
{
  if(y<120)//setting the distance range of the moving sand particle
  {
    y = y+speed;//the speed variable determines how fast or slow the object moves
  }
  else{
    y=0; //resetting the value of y if at the end of the range
  }
   return y;
}

// function mouseReleased()
// {
//   //resetting the position of the shapes when the mouse is released
//   y1 = 50;}
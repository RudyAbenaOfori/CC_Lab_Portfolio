//declare variables
let dates;
let Mon,Tue,Wed,Thu,Fri,Sat,Sun;
let r;
let index=0;
let index2=0;
let index3=0;
let index4=0;
let index5=0;
let index6=0;
let index7=0;

// let interval = 30;
// let interval2 = 60;
let s
 
//Initialize arrays
dates = ["Sat, Oct 12, 2024","Sun, Oct 13, 2024","Mon, Oct 14, 2024","Tue, Oct 15, 2024","Wed, Oct 16, 2024","Thu, Oct 17, 2024","Fri, Oct 18, 2024"];

Mon = ["9:21 AM","9:34 AM","2:14 PM","2:23 PM","2:26 PM","2:34 PM","3:41 PM","5:36 PM","5:36 PM","5:42 PM","6:07 PM","6:07 PM","6:08 PM","6:08 PM"]

Tue = ["9:43 AM","10:03 AM","10:08 AM","10:09 AM","10:10 AM","10:20 AM","12:22 PM","12:22 PM","1:49 PM","3:07 PM","3:08 PM","3:08 PM"]

Wed =["3:18 AM","3:19 AM","3:25 AM","3:26 AM","3:27 AM","3:46 AM","6:08 PM","6:09 PM","6:16 PM"]

Thu =["9:40 AM","10:02 AM","10:14 AM","10:24 AM"]

Fri =["12:48 AM","12:50 AM","12:51 AM","12:51 AM","3:54 AM","3:56 AM"]

Sat =["2:18 PM","2:21 PM","2:44 PM","2:49 PM","2:55 PM","2:55 PM","3:01 PM","3:54 PM","4:17 PM","4:17 PM","10:49 PM"]

Sun =["8:32 PM","8:33 PM","8:34 PM","8:36 PM"]

//Declare colour object for bubble background
let clr = 'rgba(138,4,228,0.2)';
let clr2 = 'rgba(127,209,247,0.5)';
let clr3 = 'rgba(6,162,157,0.5)';
let clr4 = 'rgba(29,29,29,0.)';
let clr5 = 'rgba(29,29,29,0.)';
let clr6 = 'rgba(169, 241, 243, 0.2)';

//create class for creating bubbles
class bubbles{
  constructor(xPos, yPos,s, spd, clr, clr2){
    this.x = xPos; 
    this.y = yPos; 
    this.size = s;
    this.speed = spd;
    this.colour = clr;
    this.colour = clr2;
    // this.colour = clr3;
    // this.colour = clr4;
  }

//Create method1 for designing bubble
draw_bubbles1()
{   //Call bubble background colour 
    fill(clr);
    //stroke for background circle
    push()
    stroke('rgba(138,4,228,0.5)')
    strokeWeight(2) 
    circle(this.x, this.y, this.size);
    pop()
    //Design for interior bubble circles
    push()
    noStroke();
    fill('rgba(247,200,247,0.5)')  
    ellipse(this.x+this.size/6,this.y-this.size/3, this.size/6,this.size/8);
    // stroke('rgba(221,18,245,0.1');
    fill('rgba(221,18,245,0.2)')
    circle(this.x+this.size/10,this.y, this.size/1.2);
    pop()
    //Text in bubble (displaying different browsing times)
    fill('rgba(247,200,247,0.8)') ;
    textSize(this.size/8)
    text(Sat[index],this.x-this.size/5,this.y+5);
  }
  
  //Create method2 for designing bubble
  draw_bubbles2()
{   //Call bubble background colour 
    fill(clr2);
    //stroke for background circle
    push()
    stroke('rgba(127,209,247,0.7)')
    strokeWeight(2) 
    circle(this.x, this.y, this.size);
    pop()
    //Design for interior bubble circles
    push()
    noStroke();
    fill('rgba(243,242,234,0.9)')  
    ellipse(this.x+this.size/6,this.y-this.size/3, this.size/6,this.size/8);
    // stroke('rgba(221,18,245,0.1');
    fill('rgba(127,209,247,0.4)')
    circle(this.x+this.size/10,this.y, this.size/1.2);
    pop()
    //Text in bubble (displaying different browsing times)
    fill('rgb(213,238,250)') ;
    textSize(this.size/8)
    text(Sun[index2],this.x-this.size/5,this.y+5);
  }
  
  //Create method3 for designing bubble
  draw_bubbles3()
{   //Call bubble background colour 
    fill(clr3);
    //stroke for background circle
    push()
    stroke('rgba(26,255,228,0.7)')
    strokeWeight(2) 
    circle(this.x, this.y, this.size);
    pop()
    //Design for interior bubble circles
    push()
    
    // stroke('rgba(221,18,245,0.1');
    fill('rgba(15,32,61,0.7)')
    circle(this.x+this.size/20,this.y, this.size/1.1);
    noStroke();
    fill('rgba(9,119,125,0.8)')  
    ellipse(this.x+this.size/13,this.y-this.size/2.95, this.size/2.5,this.size/6);
  fill('rgba(26,255,228,0.7)')
    circle(this.x+this.size/5,this.y-this.size/2.8, this.size/14);
    ellipse(this.x+this.size/20,this.y-this.size/2.7, this.size/5,this.size/20);
    pop()
    //Text in bubble (displaying different browsing times)
    fill('rgba(26,255,228,0.4)') ;
    textSize(this.size/8)
    text(Mon[index3],this.x-this.size/5,this.y+5);
  }
  
  
   //Create method4 for designing bubble
   draw_bubbles4()
{   //Call bubble background colour 
    fill(clr4);
    //stroke for background circle
    push()
    stroke('rgba(29,29,29,0.5)')
    strokeWeight(2) 
    circle(this.x, this.y, this.size);
    pop()
    //Design for interior bubble circles
    push()
    
    stroke('rgba(192,192,192,0.7)');
    fill('rgba(192,192,192,0.7)')
    circle(this.x+this.size/20,this.y, this.size/1.1);
    noStroke();
    fill('rgba(29,29,29,0.1)')  
    ellipse(this.x+this.size/13,this.y-this.size/2.95, this.size/2.5,this.size/6);
    fill('rgba(241,241,241,0.7)')
    circle(this.x+this.size/5,this.y-this.size/2.8, this.size/14);
    ellipse(this.x+this.size/20,this.y-this.size/2.7, this.size/5,this.size/20);
    pop()
    //Text in bubble (displaying different browsing times)
    fill('rgba(29,29,29,0.6)') ;
    textSize(this.size/8)
    text(Tue[index4],this.x-this.size/5,this.y+5);
  }
  
   //Create method6 for designing bubble
   draw_bubbles5()
{   //Call bubble background colour 
    fill(clr5);
    //stroke for background circle
    push()
    stroke('rgba(29,29,29,0.5)')
    strokeWeight(2) 
    circle(this.x, this.y, this.size);
    pop()
    //Design for interior bubble circles
    push()
    
    stroke('rgba(192,192,192,0.7)');
    fill('rgba(25,25,25,0.7)')
    circle(this.x+this.size/20,this.y, this.size/1.1);
    noStroke();
    fill('rgba(249,248,248,0.3)')  
    ellipse(this.x+this.size/13,this.y-this.size/2.95, this.size/2.5,this.size/6);
    fill('rgba(241,241,241,0.7)')
    circle(this.x+this.size/5,this.y-this.size/2.8, this.size/14);
    ellipse(this.x+this.size/20,this.y-this.size/2.7, this.size/5,this.size/20);
    pop()
    //Text in bubble (displaying different browsing times)
    fill('rgba(29,29,29,0.6)') ;
    textSize(this.size/8)
    text(Wed[index5],this.x-this.size/5,this.y+5);
  }
  
  
  //Create method6 for designing bubble
   draw_bubbles6()
{   //Call bubble background colour 
    fill(clr6);
    //stroke for background circle
    push()
    stroke('rgba(169, 241, 243, 0.2)')
    strokeWeight(2) 
    circle(this.x, this.y, this.size);
    pop()
    //Design for interior bubble circles
    push()
    
    stroke('rgba(192,192,192,0.7)');
    fill('rgba(169, 241, 243, 0.3)')
    circle(this.x+this.size/20,this.y, this.size/1.1);
    noStroke();
    fill('rgba(249,248,248,0.4)')  
    ellipse(this.x+this.size/13,this.y-this.size/2.95, this.size/2.5,this.size/6);
    fill('rgba(241,241,241,0.7)')
    circle(this.x+this.size/5,this.y-this.size/2.8, this.size/14);
    ellipse(this.x+this.size/20,this.y-this.size/2.7, this.size/5,this.size/20);
    pop()
    //Text in bubble (displaying different browsing times)
    fill('rgba(29,21,0,0.6)') ;
    textSize(this.size/8)
    text(Thu[index6],this.x-this.size/5,this.y+5);
  }
  
  
  //Create method7 for designing bubble
   draw_bubbles7()
{   //Call bubble background colour 
    fill(clr6);
    //stroke for background circle
    push()
    stroke('rgba(169, 241, 243, 0.2)')
    strokeWeight(2) 
    circle(this.x, this.y, this.size);
    pop()
    //Design for interior bubble circles
    push()
    
    stroke('rgba(192,192,192,0.7)');
    fill('rgba(169, 241, 243, 0.4)')
    circle(this.x+this.size/20,this.y, this.size/1.1);
    noStroke();
    fill('rgba(249,248,248,0.4)')  
    ellipse(this.x+this.size/13,this.y-this.size/2.95, this.size/2.5,this.size/6);
    fill('rgba(241,241,241,0.7)')
    circle(this.x+this.size/5,this.y-this.size/2.8, this.size/14);
    ellipse(this.x+this.size/20,this.y-this.size/2.7, this.size/5,this.size/20);
    pop()
    //Text in bubble (displaying different browsing times)
  
    fill('rgba(169,241,29,0.6)');
  push()
    fill('rgba(255,255,255,0.9)');
    textSize(this.size/8)
    text(Thu[index6],this.x-this.size/5,this.y+5);
  pop()
  }
  

//method for animating bubble through y-axis  
 move_bubbles()
{
    if(this.y<height){
      this.y+=this.speed      
    }
    else{
      this.y = 0; 
    }
  }
  
}


//declare an array to hold all bubbles
let bubbles_all =[];

function setup() {
  createCanvas(400, 400);   
  frameRate(5);
  angleMode(DEGREES);
  //initialize pixel dot base radius
  r = 20;
  //create background canvas
  createCanvas(600, 600);
  //loop for creating all bubbles
  for(let i = 0; i<10; i++){
  //Assign all bubbles in the bubbles array to the class and 
    bubbles_all[i] = new bubbles(random(width), 30*i,random(50,200),i-3);
  }
}


function draw() {
  s = second();
  rad = map(s, 0, 59, 100, 10);
  
  if (s< 10) {
     let D1= Browsing_H_D1();
  }
  else if(s>9 & s<18){
    let D2= Browsing_H_D2();
  }
  else if(s>18 & s<27){     
    let D3= Browsing_H_D3();
  }
  else if(s>27 & s<35){
     let D4= Browsing_H_D4();
  }
  else if(s>35 & s<43){
     let D5= Browsing_H_D5();
  }
  else if(s>43 & s<51){
     let D6= Browsing_H_D6();
  }
  else if(s>51 & s<60){
     let D7= Browsing_H_D7();
  }
    
  // console.log(s)
  
  
}


//Change time in bubbles per mouse click
function mousePressed(){
  if(index < Sat.length - 1){
    index=index+1;
  }
  else{
    index=0;
  }
  
  if(index2 < Sun.length - 1){
    index2=index2+1;
  }
  else{
    index2=0;
  }
  
  if(index3 < Mon.length - 1){
    index3=index3+1;
  }
  else{
    index3=0;
  }
  
  if(index4 < Tue.length - 1){
    index4=index4+1;
  }
  else{
    index4=0;
  }
  
  if(index5 < Wed.length - 1){
    index5=index5+1;
  }
  else{
    index5=0;
  }
  
  if(index6 < Thu.length - 1){
    index6=index6+1;
  }
  else{
    index6=0;
  }    
  
  if(index7 < Fri.length - 1){
    index7=index7+1;
  }
  else{
    index7=0;
  }
  
}

function Browsing_H_D1(){
   //background colour of canvas
  background(20); 
 
  //Creating pixel dots for background
  for(let i =0; i*r<=width; i++){    
    for(let j =0; j*r<=height; j++){
      //declare variable for pixel dot size
      let a,b;
      //declare variable for pixel dot colour
      let re;
      //Initilize variables for pixel dots
      a = random(r/2.5, r/2)
      b = random(r/2.5, r/2)      
      re = map(i*j, 0, width*height/(r*r), 100, 255);
      //generate pixel dot colour     
      fill(re, 20, 180);
      //create pixel dots
      circle(i*r, j*r, a)
    }
  }
  
  //loop for calling all bubbles
  for(let i = 0; i<Sat.length-1; i++){
    bubbles_all[i].draw_bubbles1();
    bubbles_all[i].move_bubbles();
  }
  
 
  //Creating blinking number
  //initialize variable to random radius
    a = random(r/2.5, r/1.5)
  //creating text style
    push()
    stroke(0);
    noFill();
    stroke("f1f1f1")
    strokeWeight(1);
    // fill("#f1f1f1")
    textSize(35);
    text('Browsing History Day 1',120,120)
    // fill(255);
    pop()
    push()
    textSize(20);
    text("Click To Display Browsing Times",170,550)
    fill("f1f1f1")
    textSize(20);
    text(dates[0],220,160)
    pop()
    
    push()
    fill("#f1f1f1")
  //blinking number(9) xPos
    circle(11*r, 12*r, a)
    circle(12*r, 12*r, a)
    circle(13*r, 12*r, a)
    circle(14*r, 12*r, a)
    circle(15*r, 12*r, a)
    circle(16*r, 12*r, a)
    circle(17*r, 12*r, a)
    circle(18*r, 12*r, a)
    circle(19*r, 12*r, a)
    circle(11*r, 13*r, a)
    circle(12*r, 13*r, a)
    circle(13*r, 13*r, a)
    circle(14*r, 13*r, a)
    circle(15*r, 13*r, a)
    circle(16*r, 13*r, a)
    circle(17*r, 13*r, a)
    circle(18*r, 13*r, a)
    circle(19*r, 13*r, a)
    circle(11*r, 17*r, a)
    circle(12*r, 17*r, a)
    circle(13*r, 17*r, a)
    circle(14*r, 17*r, a)
    circle(15*r, 17*r, a)
    circle(16*r, 17*r, a)
    circle(17*r, 17*r, a)
    circle(18*r, 17*r, a)
    circle(19*r, 17*r, a)
    circle(11*r, 18*r, a)
    circle(12*r, 18*r, a)
    circle(13*r, 18*r, a)
    circle(14*r, 18*r, a)
    circle(15*r, 18*r, a)
    circle(16*r, 18*r, a)
    circle(17*r, 18*r, a)
    circle(18*r, 18*r, a)
    circle(19*r, 18*r, a)
    circle(11*r, 22*r, a)
    circle(12*r, 22*r, a)
    circle(13*r, 22*r, a)
    circle(14*r, 22*r, a)
    circle(15*r, 22*r, a)
    circle(16*r, 22*r, a)
    circle(17*r, 22*r, a)
    circle(18*r, 22*r, a)
    circle(19*r, 22*r, a)
    circle(11*r, 23*r, a)
    circle(12*r, 23*r, a)
    circle(13*r, 23*r, a)
    circle(14*r, 23*r, a)
    circle(15*r, 23*r, a)
    circle(16*r, 23*r, a)
    circle(17*r, 23*r, a)
    circle(18*r, 23*r, a)
    circle(19*r, 23*r, a)
  
  //blinking number(9) yPos
    circle(11*r, 14*r, a)
    circle(12*r, 14*r, a)
    circle(11*r, 15*r, a)
    circle(12*r, 15*r, a)
    circle(11*r, 16*r, a)
    circle(12*r, 16*r, a)
    circle(18*r, 14*r, a)
    circle(19*r, 14*r, a)
    circle(18*r, 15*r, a)
    circle(19*r, 15*r, a)
    circle(18*r, 16*r, a)
    circle(19*r, 16*r, a)
    circle(18*r, 18*r, a)
    circle(19*r, 18*r, a)
    circle(18*r, 19*r, a)
    circle(19*r, 19*r, a)
    circle(18*r, 20*r, a)
    circle(19*r, 20*r, a)
    circle(18*r, 21*r, a)
    circle(19*r, 21*r, a)
  
   pop()
}

function Browsing_H_D2(){
   //background colour of canvas
  background ("#072838"); 
 
  //Creating pixel dots for background
  for(let i =0; i*r<=width; i++){    
    for(let j =0; j*r<=height; j++){
      //declare variable for pixel dot size
      let a,b;
      //declare variable for pixel dot colour
      let re;
      //Initilize variables for pixel dots
      a = random(r/2.5, r/2)
      b = random(r/2.5, r/2)      
      re = map(i*j, 0, width*height/(r*r), 100, 255);
      //generate pixel dot colour     
      fill(re, 190, 255);
      //create pixel dots
      circle(i*r, j*r, a)
    }
  }
  
  //loop for calling all bubbles
  for(let i = 0; i<Sat.length-1; i++){
    bubbles_all[i].draw_bubbles2();
    bubbles_all[i].move_bubbles();
  }
  
 
  //Creating blinking number
  //initialize variable to random radius
    a = random(r/2.5, r/1.5)
  //creating text style
    push()
    stroke(0);
    noFill();
    stroke("f1f1f1")
    strokeWeight(1);
    // fill("#f1f1f1")
    textSize(35);
    text('Browsing History Day 2',120,120)
    // fill(255);
    pop()
    push()
    textSize(20);
    text("Click To Display Browsing Times",170,550)
    fill("f1f1f1")
    textSize(20);
    text(dates[1],220,160)
    pop()
  
  
    push()
    fill("#ffffff")
  //blinking number(4) xPos
    circle(17*r, 12*r, a)
    circle(18*r, 12*r, a)
    circle(19*r, 12*r, a)
    circle(16*r, 13*r, a)
    circle(17*r, 13*r, a)
    circle(18*r, 13*r, a)
    circle(19*r, 13*r, a)
    circle(15*r, 14*r, a)
    circle(16*r, 14*r, a)
    circle(18*r, 14*r, a)
    circle(19*r, 14*r, a)
    circle(14*r, 15*r, a)
    circle(15*r, 15*r, a)
    circle(18*r, 15*r, a)
    circle(19*r, 15*r, a)
    // circle(7*r, 14*r, a)
    // circle(8*r, 14*r, a)
    // circle(9*r, 14*r, a)
    circle(13*r, 16*r, a)
    circle(14*r, 16*r, a)
    // circle(15*r, 14*r, a)
    // circle(16*r, 14*r, a)
    circle(11*r, 18*r, a)
    circle(12*r, 18*r, a)
    circle(13*r, 18*r, a)
    circle(14*r, 18*r, a)
    circle(15*r, 18*r, a)
    circle(16*r, 18*r, a)
    circle(17*r, 18*r, a)
    circle(18*r, 18*r, a)
    circle(19*r, 18*r, a)
    circle(11*r, 19*r, a)
    circle(12*r, 19*r, a)
    circle(13*r, 19*r, a)
    circle(14*r, 19*r, a)
    circle(15*r, 19*r, a)
    circle(16*r, 19*r, a)
    circle(17*r, 19*r, a)
    circle(18*r, 19*r, a)
    circle(19*r, 19*r, a)
    // circle(7*r, 15*r, a)
    // circle(8*r, 15*r, a)
    // circle(9*r, 15*r, a)
    // circle(10*r, 15*r, a)
    // circle(11*r, 15*r, a)
    circle(18*r, 22*r, a)
    circle(19*r, 22*r, a)
    // circle(7*r, 16*r, a)
    // circle(8*r, 16*r, a)
    // circle(9*r, 16*r, a)
    // circle(10*r, 16*r, a)
    // circle(11*r, 16*r, a)
    circle(18*r, 23*r, a)
    circle(19*r, 23*r, a)
    // circle(18*r, 24*r, a)
    // circle(19*r, 24*r, a)
    // circle(18*r, 25*r, a)
    // circle(19*r, 25*r, a)
  
  //blinking number(9) yPos
    // circle(14*r, 14*r, a)
    // circle(15*r, 14*r, a)
    circle(13*r, 17*r, a)
    circle(12*r, 17*r, a)
    circle(18*r, 16*r, a)
    circle(19*r, 16*r, a)
    circle(18*r, 17*r, a)
    circle(19*r, 17*r, a)
    circle(18*r, 20*r, a)
    circle(19*r, 20*r, a)
    circle(18*r, 21*r, a)
    circle(19*r, 21*r, a)
   pop()
}


function Browsing_H_D3(){
   //background colour of canvas
  background ("#0F203D"); 
 
  //Creating pixel dots for background
  for(let i =0; i*r<=width; i++){    
    for(let j =0; j*r<=height; j++){
      //declare variable for pixel dot size
      let a,b;
      //declare variable for pixel dot colour
      let re;
      //Initilize variables for pixel dots
      // a = random(r/1.5, r/0.5)
      // b = random(r/1.5, r/0.5)      
      // re = map(i*j, 0, width*height/(r*r), 100, 255);
      //generate pixel dot colour     
      // fill(re, 190, 255);
      //create pixel dots
      noFill();
      // strokeWeight(4)
      stroke("#096D76")
      strokeWeight(0.2)
      rect(i*r, j*r, 20, 20);
    }
  }
  
  //loop for calling all bubbles
  for(let i = 0; i<Sat.length-1; i++){
    bubbles_all[i].draw_bubbles3();
    bubbles_all[i].move_bubbles();
  }
  
 
  //Creating blinking number
  //initialize variable to random radius
    a = random(r/2.5, r/1.5)
  //creating text style
    push()
    stroke(0);
    noFill();
    stroke("#f1f1f1")
    strokeWeight(1);
    // fill("#f1f1f1")
    textSize(35);
    text('Browsing History Day 3',120,120)
    // fill(255);
    pop()
    push()
    fill('rgba(26,255,228,0.7)')
    textSize(280);
    text("11",165,440)
    textSize(20);
    text("Click To Display Browsing Times",170,550)
    fill("#f1f1f1")
    textSize(20);
    text(dates[2],220,160)
    pop()
  
}



function Browsing_H_D4(){
   //background colour of canvas
  background ("#f1f1f1"); 
   
  //loop for calling all bubbles
  for(let i = 0; i<Sat.length-1; i++){
    bubbles_all[i].draw_bubbles4();
    bubbles_all[i].move_bubbles();
  }
  
 
  //Creating blinking number
  //initialize variable to random radius
    a = random(r/2.5, r/1.5)
  //creating text style
    push()
    stroke(0);
    noFill();
    stroke("#1E1E1E")
    strokeWeight(2);
    // fill("#f1f1f1")
    textSize(35);
    text('Browsing History Day 4',120,120)
    // fill(255);
    pop()
    push()
    fill('#1E1E1E')
  push()
    textSize(280);
    stroke(0);
    noFill();
    stroke("rgba(29,29,29,0.8)")
    strokeWeight(10);
    text("11",165,440)
  pop()
    textSize(20);
    text("Click To Display Browsing Times",170,550)
    fill("#1E1E1E")
    textSize(20);
    text(dates[3],220,160)
    pop()
  
}


function Browsing_H_D5(){
   //background colour of canvas
  background ("#f1f1f1"); 
 
  //Creating pixel dots for background
  for(let i =0; i*r<=width; i++){    
    for(let j =0; j*r<=height; j++){
      // declare variable for pixel dot size
      let a,b;
      // declare variable for pixel dot colour
      let re;
      // Initilize variables for pixel dots
      a = random(r/1.5, r/0.5)
      b = random(r/1.5, r/0.5)      
      re = map(i*j, 0, width*height/(r*r), 100, 255);
      //generate pixel dot colour     
      stroke(a, a, b);
      //create pixel dots
      noFill();
      // strokeWeight(4)
      // stroke("#096D76")
      // strokeWeight(0.2)
      rect(i*r, j*r, a, b);
    }
  }
  
  //loop for calling all bubbles
  for(let i = 0; i<Sat.length-1; i++){
    bubbles_all[i].draw_bubbles5();
    bubbles_all[i].move_bubbles();
  }
  
 
  //initialize variable to random radius
    a = random(r/2.5, r/1.5)
  //creating text style
    push()
    stroke(0);
    noFill();
    stroke("#1E1E1E")
    strokeWeight(2);
    // fill("#f1f1f1")
    textSize(35);
    text('Browsing History Day 5',120,120)
    // fill(255);
    pop()
    push()
    fill('#1E1E1E')
  push()
    textSize(280);
    stroke(0);
    noStroke();
    fill("rgba(29,29,29,0.8)")
    strokeWeight(10);
    text("9",230,440)
  pop()
    textSize(20);
    text("Click To Display Browsing Times",170,550)
    fill("#1E1E1E")
    textSize(20);
    text(dates[4],220,160)
    pop()
  
}



function Browsing_H_D5(){
   //background colour of canvas
  background ("#f1f1f1"); 
 
  //Creating pixel dots for background
  for(let i =0; i*r<=width; i++){    
    for(let j =0; j*r<=height; j++){
      // declare variable for pixel dot size
      let a,b;
      // declare variable for pixel dot colour
      let re;
      // Initilize variables for pixel dots
      a = random(r/1.5, r/0.5)
      b = random(r/1.5, r/0.5)      
      re = map(i*j, 0, width*height/(r*r), 100, 255);
      //generate pixel dot colour     
      stroke(a, a, b);
      //create pixel dots
      noFill();
      // strokeWeight(4)
      // stroke("#096D76")
      // strokeWeight(0.2)
      rect(i*r, j*r, a, b);
    }
  }
  
  //loop for calling all bubbles
  for(let i = 0; i<Sat.length-1; i++){
    bubbles_all[i].draw_bubbles5();
    bubbles_all[i].move_bubbles();
  }
  
 
  //initialize variable to random radius
    a = random(r/2.5, r/1.5)
  //creating text style
    push()
    stroke(0);
    noFill();
    stroke("#1E1E1E")
    strokeWeight(2);
    // fill("#f1f1f1")
    textSize(35);
    text('Browsing History Day 5',120,120)
    // fill(255);
    pop()
    push()
    fill('#1E1E1E')
  push()
    textSize(280);
    stroke(0);
    noStroke();
    fill("rgba(29,29,29,0.8)")
    strokeWeight(10);
    text("9",230,440)
  pop()
    textSize(20);
    text("Click To Display Browsing Times",170,550)
    fill("#1E1E1E")
    textSize(20);
    text(dates[4],220,160)
    pop()
  
}


function Browsing_H_D6(){
   //background colour of canvas
  background ("#f1f1f1"); 
 
  //Creating pixel dots for background
  for(let i =0; i*r<=width; i++){    
    for(let j =0; j*r<=height; j++){
      // declare variable for pixel dot size
      let a,b;
      // declare variable for pixel dot colour
      let re;
      // Initilize variables for pixel dots
      a = random(r/1.5, r/0.5)
      b = random(r/1.5, r/0.5)      
      re = map(i*j, 0, width*height/(r*r), 100, 255);
      //generate pixel dot colour     
      
      //create pixel dots
      // noFill();
      // strokeWeight(4)
      // stroke("#096D76")
      // strokeWeight(0.2)
      // fill(re, a, b);
      rect(i*r, j*r, a, b);
    }
  }
  
  //loop for calling all bubbles
  for(let i = 0; i<Sat.length-1; i++){
    bubbles_all[i].draw_bubbles6();
    bubbles_all[i].move_bubbles();
  }
  
 
  //initialize variable to random radius
    a = random(r/2.5, r/1.5)
  //creating text style
    push()
    stroke(0);
    noFill();
    stroke("rgb(255, 255, 255)")
    strokeWeight(2);
    // fill("#f1f1f1")
    textSize(35);
    text('Browsing History Day 6',120,120)
    // fill(255);
    pop()
    push()
    fill('#ffffff')
  push()
    textSize(280);
    stroke(0);
    noStroke();
    fill("rgba(255,255,255,0.9)")
    strokeWeight(10);
    text("3",230,440)
  pop()
    textSize(20);
    text("Click To Display Browsing Times",170,550)
    fill("#ffffff")
    textSize(20);
    text(dates[5],220,160)
    pop()
  
}



function Browsing_H_D7(){
   //background colour of canvas
  background ("#f1f1f1"); 
 
  //Creating pixel dots for background
  for(let i =0; i*r<=width; i++){    
    for(let j =0; j*r<=height; j++){
      // declare variable for pixel dot size
      let a,b;
      // declare variable for pixel dot colour
      let re;
      // Initilize variables for pixel dots
      a = random(r/1.5, r/0.5)
      b = random(r/1.5, r/0.5)      
      re = map(i*j, 0, width*height/(r*r), 100, 255);
      //generate pixel dot colour     
      
      //create pixel dots
      // noFill();
      // strokeWeight(4)
      // stroke("#096D76")
      // strokeWeight(0.2)
      // fill(re, a, b);
      rect(i*r, j*r, a, b);
    }
  }
  
  //loop for calling all bubbles
  for(let i = 0; i<Sat.length-1; i++){
    bubbles_all[i].draw_bubbles7();
    bubbles_all[i].move_bubbles();
  }
  
 
  //initialize variable to random radius
    a = random(r/2.5, r/1.5)
  //creating text style
    push()
    stroke(0);
    noFill();
    stroke("rgb(255, 255, 255)")
    strokeWeight(2);
    // fill("#f1f1f1")
    textSize(35);
    text('Browsing History Day 7',120,120)
    // fill(255);
    pop()
    push()
    fill('#ffffff')
  push()
    textSize(280);
    stroke(0);
    noStroke();
    fill("rgba(255,255,255,0.9)")
    strokeWeight(10);
    text("4",230,440)
  pop()
    fill("#000000")
    textSize(20);
    text("Click To Display Browsing Times",170,550)
    textSize(20);
    text(dates[6],220,160)
    pop()
  
}
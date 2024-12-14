let scene = 1; // Variable to track the current scene

// Scene 1 variables
let string = `Welcome to Bublee's World!
Click 'START' to begin the game`;
let currentCharacter = 0;
let pageMargin = 150;
let bg_img;

// Scene 2 variables
let string2 = `Welcome to the Rainbow Fields! 
In this first glimpse of my world, you'll discover a mesmerizing landscape filled with beautiful rainbow bubbles. But don't let their beauty deceive you – these bubbles are dangerous. 
One touch from them and you'll die.
For your first level collect at least 8 skill coins to become a first-gen Bublee expert and unlock new levels to explore. Get ready for your adventure!`;
let currentCharacter2 = 0;
let bg_img2;
let instructor_img;

// Scene 3 variables
let s = 4;
let d = 50;
let dates;
let index4 = 0;
var x = 30;
var y = 570;
let yVelocity = 0;
let gravity = 1;
let jumpStrength = -15;
let isJumping = false;
let obstacles = [];
let maxObstacles = 5;
let doorwayActive = false;
let doorwayX = 760;
let moving = false;
let r;
let cloud_img;
let flower = [];
let coins = [];
let coin_image;
let no_of_coins = 10;
let score = 0;
let collisionCount = 0; // Tracks the number of collisions
const maxCollisions = 30; // Maximum allowed collisions before game over
//Time capsule text
dates = ["Sat, Oct 12, 2024", "Sun, Oct 13, 2024", "Mon, Oct 14, 2024", "Tue, Oct 15, 2024", "Wed, Oct 16, 2024", "Thu, Oct 17, 2024", "Fri, Oct 18, 2024"];
let Sat = ["2:18 PM", "2:21 PM", "2:44 PM", "2:49 PM", "2:55 PM", "2:55 PM", "3:01 PM", "3:54 PM", "2:49 PM", "2:55 PM", "2:55 PM", "3:01 PM", "3:54 PM", "4:17 PM", "4:17 PM", "10:49 PM"];
let Tue = ["9:43 AM", "10:03 AM", "10:08 AM", "10:09 AM", "10:10 AM", "10:20 AM", "12:22 PM", "12:22 PM", "1:49 PM", "3:07 PM", "3:08 PM", "3:08 PM"];
//Bubble colors
let clr6 = "rgba(120, 241, 243, 0.2)";
let clr3 = "rgba(6,162,157,0.5)";
let gameOver = false;
let bubbles_all = [];
let bublee;
let bubbleColors = ["rgba(120, 241, 243, 0.2)", "rgba(181, 252, 243,0.6)", "rgba(255, 126, 49, 0.5)", "rgba(185, 148, 246, 0.3)", "rgba(221, 232, 17, 0.2)"];

function preload() {
  // Load images for both scenes
  bg_img = loadImage("./assets/u3366585754_Setting_A_vibrant_whimsical_world_overflowing_wit_f2409b17-de24-493d-bf50-cddc7cb85538_0 1.png");
  bg_img2 = loadImage("./assets/u3366585754_create_the_image_of_a_magical_whimsical_field_fil_75aae9d7-e6a5-4ae1-b030-39682b6f0d86_1.png");
  instructor_img = loadImage("./assets/u3366585754_Setting_A_vibrant_whimsical_world_overflowing_wit_97d6bc18-c326-41b6-97d3-1696e0a6db61_0 1 (1).png");
  pixeloid = loadFont("./assets/PixeloidMono.ttf");
  bg_img3 = loadImage("./assets/u3366585754_Create_a_vibrant_2D_illustration_of_a_bright_sunn_0232d763-df5b-4961-8bf5-ec6f3e69d358_0.png");
  coin_image = loadImage("./assets/ezgif.com-animated-gif-maker (2).gif");
  char_img = loadImage("./assets/Ahaa.png");
}

class bubbles {
  constructor(xPos, yPos, s, spd, clr) {
    this.x = xPos;
    this.y = yPos;
    this.size = s;
    this.speed = spd;
    this.color = clr;
    this.collided = false; // Initialize the collided property
  }

  draw_bubbles4() {
    // Draw the bubble
    fill(this.color);
    push();
    stroke("rgba(243,251,252,0.45)");
    strokeWeight(2);
    circle(this.x, this.y, this.size);
    pop();

    // Draw secondary bubble visuals
    push();
    stroke("rgba(192,192,192,0.7)");
    fill("rgba(169, 241, 243, 0.4)");
    circle(this.x + this.size / 20, this.y, this.size / 1.1);
    noStroke();
    fill("rgba(249,248,248,0.4)");
    ellipse(this.x + this.size / 13, this.y - this.size / 2.95, this.size / 2.5, this.size / 6);
    fill("rgba(241,241,241,0.7)");
    circle(this.x + this.size / 5, this.y - this.size / 2.8, this.size / 14);
    ellipse(this.x + this.size / 20, this.y - this.size / 2.7, this.size / 5, this.size / 20);
    pop();

    // Draw the text in the center of the bubble
    push();
    fill("rgba(255,255,255,0.9)");
    textSize(this.size / 8);
    textAlign(CENTER, CENTER); // Align text to the center of the bubble
    text(Tue[index4], this.x, this.y); // Position text at the bubble's center
    pop();
  }

  move_bubbles() {
    this.y = this.y < height ? this.y + this.speed : 0;
    // this.x = this.x < width ? this.x + this.speed : 0;
  }
}

class character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 150; // Width of the character's image
    this.height = 150; // Height of the character's image
  }

  draw_character() {
    image(char_img, this.x, this.y - this.height + 50, this.width, this.height);
  }
}

class coin {
  constructor(x1, y1, r1) {
    this.x = x1;
    this.y = y1;
    this.r = r1;
    this.state = true;
  }

  show_coin() {
    if (this.state) {
      image(coin_image, this.x, this.y, 4 * this.r, 4 * this.r);
    }
  }

  check_char_collision() {
    if (bublee.x < this.x + 1 * this.r && bublee.x + bublee.width > this.x - 1 * this.r && bublee.y - bublee.height < this.y + 1 * this.r && bublee.y > this.y - 1 * this.r) {
      if (this.state) score++;
      this.state = false; // Mark coin as collected
    }
  }
}

function setup() {
  createCanvas(800, 660);
  r = 20;

  for (let i = 0; i < Sat.length - 1; i++) {
    let randomColor = random(bubbleColors);
    bubbles_all[i] = new bubbles(random(0, width), 30 * i, random(30, 80), i - 3, randomColor);
  }

  bublee = new character(x, y);

  for (let i = 0; i < no_of_coins; i++) {
    coins[i] = new coin(random(0, 800), random(250, 500), 10);
  }

  for (let i = 0; i < 30; i++) {
    flower.push({
      x: random(width),
      y: random(height - 100, height - 160),
      color: random([color(255, 0, 0), color(255, 165, 0), color(255, 255, 0), color(91, 159, 250), color(255, 105, 180)]),
    });
  }
}

function draw() {
  background(220);

  if (scene === 1) {
    drawScene1();
  } else if (scene === 2) {
    drawScene2();
  } else if (scene === 3) {
    drawScene3();
  }
}

function drawScene1() {
  let currentString = string.substring(0, currentCharacter);

  // Display background image for scene 1
  image(bg_img, 0, 0, 800, 800);

  // Draw textbox
  push();
  noStroke();
  fill("rgba(19, 19, 21,0.7)");
  rect(pageMargin, pageMargin * 2.7, width - pageMargin * 2, height - pageMargin * 3.5, 10);
  fill("#F52014");
  rect(pageMargin * 2, pageMargin * 3.8, width - pageMargin * 4, height - pageMargin * 4, 10);
  pop();

  // Draw the current string and START button
  push();
  textSize(22);
  textFont(pixeloid);
  textAlign(CENTER, TOP);
  fill("ffffff");
  text(currentString, pageMargin + 10, pageMargin * 2.7 + 35, width - pageMargin * 2, height - pageMargin);
  text("START", pageMargin * 2.7, pageMargin * 3.92);
  pop();

  // Advance the typewriter effect
  currentCharacter += 0.1;
}

function drawScene2() {
  let currentString2 = string2.substring(0, currentCharacter2);

  // Display background image for scene 2
  image(bg_img2, 0, 0, 800, 800);

  // Draw textbox and instructor image
  push();
  noStroke();
  fill("rgba(19, 19, 21,0.7)");
  rect(pageMargin / 4, pageMargin / 4, width - pageMargin / 2, height - pageMargin / 2.1, 10);
  fill("#F52014");
  rect(pageMargin * 1.75, pageMargin * 2.8, width - pageMargin * 4, height - pageMargin * 4, 10);
  image(instructor_img, pageMargin / 4 + 40, pageMargin / 4 + 40, 385, 300);
  pop();

  // Draw the current string and NEXT button
  push();
  textSize(16);
  textFont(pixeloid);
  textAlign(LEFT, TOP);
  fill("ffffff");
  text(currentString2, pageMargin * 3.3, pageMargin / 4 + 55, width - pageMargin * 3.8, height - pageMargin);
  textSize(24);
  text("NEXT", pageMargin * 2.2, pageMargin * 2.93);
  pop();

  // Advance the typewriter effect
  currentCharacter2 += 0.3;
}

function drawScene3() {
  frameRate(10);

  if (gameOver) {
    loseScreen(); // Display the "Game Over" screen
  } else {
    background("#a3d6f7"); // Set background sky color
    image(bg_img3, 0, -240, 800, 800); // Draw background image
    drawBackground(); // Draw the landscape, hills, and flowers

    bublee.draw_character(); // Draw the player character
    moveCharacter(); // Handle player movement

    Browsing_H_D4(); // Draw and animate the bubbles
    checkCollision(); // Check for collisions each frame

    // Show and check collisions for coins
    for (let i = 0; i < no_of_coins; i++) {
      coins[i].show_coin();
      coins[i].check_char_collision();
    }

    // Display the player's score
    push();
    fill("rgba(33, 35, 39,0.7)");
    noStroke();
    rect(0, 70, 800, 50);
    fill("rgb(255, 165, 0)"); // Orange text color
    textFont(pixeloid);
    textAlign(LEFT, CENTER); // Ensure consistent alignment
    textSize(16);
    text("Skill Coins Required: 8", 50, 100);
    text("Score: " + score, 600, 100);
    pop();

    // Display remaining lives
    displayLives(); // Call the function to display lives
  }

  // Draw "Restart" Button
  push();
  fill("rgba(255, 69, 0, 0.9)"); // Button background color
  rect(width - 150, 20, 120, 40, 10); // Position and size
  fill("white");
  textSize(18);
  textAlign(CENTER, CENTER); // Center-align text for the button
  text("Restart", width - 90, 40); // Button label
  pop();

  // Generate new obstacles at regular intervals
  if (obstacles.length < maxObstacles && frameCount % 70 === 0) {
    let rectHeight = random(40, 150);
    obstacles.push({
      x: width,
      y: height - 100 - rectHeight,
      width: random(50, 120),
      height: rectHeight,
      speed: 8,
    });
  }

  // Handle obstacles, whether the character is moving or not
  if (moving) {
    for (let i = obstacles.length - 1; i >= 0; i--) {
      let obs = obstacles[i];
      fill("rgba(6,246,16,0.6)");
      rect(obs.x, obs.y, obs.width, obs.height);
      drawGreenRectanglesWithinObstacle(obs);
      obs.x -= obs.speed; // Move the obstacle left

      // Remove off-screen obstacles
      if (obs.x + obs.width < 0) {
        obstacles.splice(i, 1);
      }

      handleObstacleCollision(obs); // Handle collisions with the player
    }
  } else {
    for (let obs of obstacles) {
      fill("rgba(6,246,16,0.6)");
      rect(obs.x, obs.y, obs.width, obs.height);
      drawGreenRectanglesWithinObstacle(obs);
    }
  }

  // Handle doorway activation after obstacles are done
  if (obstacles.length == maxObstacles && !doorwayActive) {
    doorwayActive = true;
  }

  if (doorwayActive) {
    drawDoorway();
    checkDoorwayCollision(); // Check for collision with the doorway
  }
}

function mousePressed() {
  // Check if "START" button is clicked in Scene 1
  if (
    scene === 1 &&
    mouseX > pageMargin * 2 && // Left edge of the button
    mouseX < pageMargin * 2 + (width - pageMargin * 4) && // Right edge of the button
    mouseY > pageMargin * 3.8 && // Top edge of the button
    mouseY < pageMargin * 3.8 + (height - pageMargin * 4) // Bottom edge of the button
  ) {
    scene = 2; // Move to Scene 2
  }

  // Check if "NEXT" button is clicked in Scene 2
  if (
    scene === 2 &&
    mouseX > pageMargin * 1.75 && // Left edge of the button
    mouseX < pageMargin * 1.75 + (width - pageMargin * 4) && // Right edge of the button
    mouseY > pageMargin * 2.8 && // Top edge of the button
    mouseY < pageMargin * 2.8 + (height - pageMargin * 4) // Bottom edge of the button
  ) {
    scene = 3; // Move to Scene 3
  }

  // Check if "Restart" button is clicked in Scene 3
  if (
    scene === 3 &&
    mouseX > width - 150 && // Left edge of the button
    mouseX < width - 150 + 120 && // Right edge of the button
    mouseY > 20 && // Top edge of the button
    mouseY < 20 + 40 // Bottom edge of the button
  ) {
    restartGame(); // Call restart function
  }
}

// Display remaining lives
function displayLives() {
  push();
  fill("rgba(33, 35, 39,0.7)"); // Background overlay for the text
  noStroke();
  rect(0, 0, 800, 50); // Fixed position and size for the background bar

  fill("rgb(255, 69, 0)"); // Red text color
  textFont(pixeloid); // Use the specified font
  textAlign(LEFT, CENTER); // Consistent alignment for the text
  textSize(20);

  // Ensure remaining lives are displayed correctly
  let remainingLives = maxCollisions - collisionCount;
  remainingLives = remainingLives >= 0 ? remainingLives : 0; // Avoid negative values

  text(`Lives Remaining: ${remainingLives}`, 50, 25); // Adjust vertical position for better centering
  pop();
}

function drawGreenRectanglesWithinObstacle(obs) {
  push();
  stroke("rgba(5,5,5,0.8)");
  fill("rgba(169,241,29,0.6)");

  for (let i = obs.x; i < obs.x + obs.width; i += r) {
    for (let j = obs.y; j < obs.y + obs.height; j += r) {
      let a = random(r / 1.5, r / 1.0);
      let b = random(r / 1.5, r / 1.0);
      rect(i, j, a, b);
    }
  }

  pop();
}

function keyPressed() {
  moving = true;

  if (keyCode === LEFT_ARROW) {
    x = max(0, x - 8);
  }
  if (keyCode === RIGHT_ARROW) {
    x = min(width, x + 8);
  }
  if (keyCode === UP_ARROW && !isJumping) {
    yVelocity = jumpStrength;
    isJumping = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    moving = false;
  }
}

function drawBackground() {
  let flowr = drawFlowers();
  // fill("#8dc63f");

  push();
  stroke("rgba(80,80,80,0.8)");
  fill("rgba(52, 146, 108,0.6)");
  for (let i = 0; i * r <= width; i++) {
    for (let j = 28; j * r <= height; j++) {
      let a = random(r / 1.5, r / 0.3);
      let b = random(r / 1.5, r / 0.3);
      let re = map(i * j, 0, (width * height) / (r * r), 100, 255);
      rect(i * r, j * r, a, b);
    }
  }
  pop();
}

function moveCharacter() {
  let speed = 15;

  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
    if (x < 0) x = 0; // Prevent going off the left side
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
    if (x + bublee.width > width) x = width - bublee.width; // Prevent going off the right side
  }
  if (keyIsDown(UP_ARROW) && !isJumping) {
    yVelocity = jumpStrength;
    isJumping = true;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += speed;
    if (y > height - d / 2) y = height - d / 2;
  }

  yVelocity += gravity; // Apply gravity
  y += yVelocity; // Update vertical position

  let onObstacle = false;

  for (let obs of obstacles) {
    // Check if character lands on top of an obstacle
    if (y + bublee.height / 3.2 >= obs.y && y <= obs.y + 15 && x + bublee.width > obs.x && x < obs.x + obs.width) {
      y = obs.y - bublee.height / 3.2; // Position character on top of the obstacle
      yVelocity = 0; // Stop downward movement
      isJumping = false; // Reset jump
      onObstacle = true;
    }

    // Prevent movement through obstacle sides
    if (x + bublee.width > obs.x && x < obs.x + obs.width && y - bublee.height < obs.y + obs.height && y > obs.y) {
      if (x < obs.x) {
        x = obs.x - bublee.width; // Push character left
      } else if (x > obs.x + obs.width) {
        x = obs.x + obs.width; // Push character right
      }
    }
  }

  if (!onObstacle && y > height - bublee.height) {
    y = height - bublee.height; // Ground level
    yVelocity = 0;
    isJumping = false;
  }

  bublee.x = x;
  bublee.y = y;
}

function checkCollision() {
  for (let i = 0; i < bubbles_all.length; i++) {
    let bubble = bubbles_all[i];

    // Check if bubble has already collided
    if (bubble.collided) continue;

    // Collision detection logic
    if (
      bublee.x < bubble.x + bubble.size / 2 && // Character's left edge < Bubble's right edge
      bublee.x + bublee.width > bubble.x - bubble.size / 2 && // Character's right edge > Bubble's left edge
      bublee.y - bublee.height < bubble.y + bubble.size / 2 && // Character's top edge < Bubble's bottom edge
      bublee.y > bubble.y - bubble.size / 2 // Character's bottom edge > Bubble's top edge
    ) {
      // Record collision only if it hasn't been recorded before
      collisionCount++;
      bubble.collided = true;

      if (collisionCount >= 3) {
        gameOver = true; // End the game after 3 collisions
        break;
      }
    }
  }
}

// function checkObstacleCollision(obstacle) {
//   if (
//     x + 20 > obstacle.x && x - 20 < obstacle.x + obstacle.width &&
//     y > height - obstacle.height - 40
//   ) {
//     gameOver = true;
//   }
// }

function loseScreen() {
  noStroke();
  fill("black");
  square(0, 0, 800);
  fill("white");
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
}

function Browsing_H_D4() {
  for (let i = 0; i < Sat.length - 4; i++) {
    bubbles_all[i].draw_bubbles4();
    bubbles_all[i].move_bubbles();
  }
}

function handleObstacleCollision(obstacle) {
  if (character.x + 20 > obstacle.x && character.x - 20 < obstacle.x + obstacle.width && character.y + 20 > obstacle.y && character.y - 20 < obstacle.y + obstacle.height) {
    moving = false;

    if (keyIsDown(LEFT_ARROW)) x = obstacle.x + obstacle.width + 20;
    if (keyIsDown(RIGHT_ARROW)) x = obstacle.x - 20;
  }
}

function drawDoorway() {
  fill("purple");
  rect(doorwayX, height - 250, 40, 150);
}

function checkDoorwayCollision() {
  if (
    // Collision with left or right side of the doorway
    x + bublee.width >= doorwayX &&
    x <= doorwayX + 40 &&
    y + bublee.height >= height - 250 && // Character's feet reach the doorway height
    score >= 8 // Ensure the score requirement is met
  ) {
    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Level Complete!", width / 2, height / 2);
    noLoop(); // Stop the game loop
  }
}

function drawFlowers() {
  for (let f of flower) {
    fill(f.color);
    let petal_h = r;
    let petal_w = r / 2 + 5;

    push();
    stroke("rgba(80,80,80,0.6)");
    translate(f.x, f.y);

    strokeWeight(2);
    stroke("#8B4513");

    let bendDirection = f.x % 2 === 0 ? -PI / 12 : PI / 12;

    beginShape();
    vertex(0, 0);
    bezierVertex(-10 * cos(bendDirection), 20, 10 * cos(bendDirection), 40, 0, 60);
    endShape();

    ellipse(-r, 0, petal_h, petal_w);
    ellipse(r, 0, petal_h, petal_w);
    ellipse(0, -r, petal_w, petal_h);
    ellipse(0, r, petal_w, petal_h);

    rotate(45);
    ellipse(-r, 0, petal_h, petal_w);
    ellipse(r, 0, petal_h, petal_w);
    ellipse(0, -r, petal_w, petal_h);
    ellipse(0, r, petal_w, petal_h);

    fill("#FFC107");
    circle(0, 0, r);

    pop();
  }
}

function restartGame() {
  // Reset player position and velocity
  x = 30;
  y = 570;
  yVelocity = 0;
  isJumping = false;

  // Reset score
  score = 0;

  // Reset collision count
  collisionCount = 0;

  // Reset obstacles
  obstacles = [];

  // Reset coins
  coins = [];
  for (let i = 0; i < no_of_coins; i++) {
    coins.push(new coin(random(0, 800), random(250, 500), 10));
  }

  // Reset gameOver flag
  gameOver = false;

  // Reset other Scene 3 variables if necessary
  moving = false;
  doorwayActive = false;

  // Ensure frameCount is reset for obstacle creation
  frameCount = 0;
}

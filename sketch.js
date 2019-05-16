let balls=[];
let numBalls=20;

function setup() {
  createCanvas(600, 600);
  
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new PopcornBall(
      random(width),
      random(height),
      random(30, 70)
    );
   }
}


function draw() {
  background(155);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].bounce();
    balls[i].move();

}
}

var gravity = 9.8 / 100.0;
class PopcornBall {
  constructor(x, y) {     // we could add radius or r to the constructor
    this.x = x;
    this.y = y;
    this.xspeed = random(2, 4);
    this.yspeed = 3;
    this.r = 15;
    this.red = random(0, 256);  //color the popcorn differently for each piece?
  }
  move() {
   this.x+=this.xspeed;//your code here to move with gravity
  this.y += this.yspeed *0.5
  }
  bounce() {
    if (this.x < 0 || this.x > width){//your code here to handle hitting the left or right wall) {
      this.xspeed *= -1; //change x direction
    }
    if (this.y > height-10 && this.yspeed > 0) {
      this.y = height-20
      this.yspeed *= -0.9
    }
    if (this.y > height-11 && this.r < 30) {
      this.r += 13;
      this.yspeed *= -1.1;
    }
    this.yspeed += gravity;
    this.y += this.yspeed ;
    
  }
  display() {
    // stroke(200);
    // strokeWeight(4);
    fill(this.red, 34, 123);   //could use this.red for the R value
    ellipse(this.x, this.y, this.r, this.r);
  }
}

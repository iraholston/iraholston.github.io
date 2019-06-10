let x = 5;
function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(255);
  noStroke();

// face
  fill(255-abs(x), 255, 0);
  ellipse(202+x, 208, 300, 300);

// eyes
  fill(46, 46, 41);
  ellipse(157+x, 151+x, 40, 40);
  ellipse(304+x, 142, 40, 40);

// mouth
  fill(252, 65, 65);
  ellipse(257+x, 240, 120, 136);
  x=x+random(-3,3);
}
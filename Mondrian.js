
function setup() {
  createCanvas(780, 800);
  //noStroke();
  noLoop();
}

function draw() {
  
  drawMondRect(30, 30, width - 30, height-30, 2);
}

function drawMondRect(x1, y1, x2, y2, level) {
  //let c = color(random(0,250), random(80,130), random(50,100));
  let c2 = [color('red'), color('blue'), 
            color('black'), color('yellow') , 
            color('white'), color('white')];
  let sw = 2;
  if (level == 0){
    fill(random(c2));
    strokeWeight(sw);
  rect(x1, y1, x2-x1-sw, y2-y1-sw);
  }
  else  {
    let i = (int)(random(x1,x2));
    let j = (int)(random(y1,y2));
    
    drawMondRect(x1, y1, i, j, level-1);
    drawMondRect(i, y1, x2, j, level-1);
    drawMondRect(x1, j, i, y2, level-1);
    drawMondRect(i, j, x2, y2, level-1);
  }
}
  
/*
let c = color(random(255), random(255), 200); // Define color 'c'
fill(c); // Use color variable 'c' as fill color
noStroke(); // Don't draw a stroke around shapes
rect(mouseX, 20, 55, 55); // Draw rectangle
}
*/
var stats;
let homeRuns = [];
let years = [];
let average = [];

function preload() {
  stats = loadTable("ortiz.csv");
}

function setup() {
  createCanvas(480, 420);
  textAlign(CENTER);

  let histoGram = [0, 0, 0, 0, 0, 0];
  for (var i = 0; i < stats.getRowCount(); i++) {
    // Gets the value from row i, column 0 in the file
    years[i] = stats.get(i, 0);
    // // Gets the value from row i, column 1
    // //var homeRuns = stats.get(i, 1);
    // var rbi = stats.get(i, 2);
    average[i] = stats.get(i, 3);
    //print(year, homeRuns, rbi, average);
    homerun = stats.getNum(i, 1);
    //store each season's homeruns in an array
    homeRuns[i] = stats.getNum(i, 1);
    histoGram[(int)(homerun / 10)] += 1;

  }
  print(average);
  print(years);
  //print(histoGram);
  // for (var i = 0; i < histoGram.length; i++) {
  //   for (var j = 0; j < histoGram[i]; j++) {
  //     print("x");
  // }
  //   println("");
  // }

}

function draw() {
  background(204);
  text("Ortiz HR data for " 
       + stats.getRowCount() + " seasons.", 100, 20);

  // Draw background grid for HR data

  stroke(153);
  line(20, 100, 20, 20);
  line(20, 100, 460, 100);
  for (var i = 0; i < homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length - 1, 20, 460);
    line(x, 20, x, 100);
  }
  // Draw lines based on home run data
  noFill();
  stroke(0);
  beginShape();
  for (var i = 0; i < homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length - 1, 20, 460);
    var y = map(homeRuns[i], 0, 60, 100, 20);
    vertex(x, y);
    text((int)(homeRuns[i]), x, y);
    text(years[i].substring(2), x, 120);
  }
  text("Year (no real data after 2014)", width / 2, 135)
  endShape();
  
// Draw background grid for Batting Avg. data
text("Ortiz batting avg. for " 
       + stats.getRowCount() + " seasons.", 100, 200);

  //stroke(153);
  line(20, 300, 20, 220);
  line(20, 300, 460, 300);
  for (var j = 0; j < average.length; j++) {
    var ave = map(j, 0, average.length - 1, 20, 460);
    line(ave, 220, ave, 300);

  }
  // Draw lines based on batting avg. data
  noFill();
  stroke(0);
  beginShape();
  for (var k = 0; k < average.length; k++) {
    var xBA = map(k, 0, average.length - 1, 20, 460);
    var yBA = map(average[k], 0, .8, 300, 100);
    vertex(xBA, yBA);.800
    if (average[k] > .3 || average[k] < .2){
    text(average[k], xBA, yBA);}
    text(years[k].substring(2), xBA, 320);
  }
  text("Year (no real data after 2014)", width / 2, 335)
  endShape();

}
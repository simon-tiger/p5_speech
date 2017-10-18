var speech;
var button;
var input;

function setup() {
  createCanvas(640, 360);
  background(0);

  speech = new p5.Speech();
  speech.ended(resetBg);

  button = select('#speak');
  input = select("#input");
  button.mousePressed(speak);
}

function speak() {
  speech.speak(input.value());
  background(0, 255, 0);
}

function resetBg() {
  background(0);
}

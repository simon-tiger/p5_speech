var speech;
var button;
var input;
var voiceInput;

function setup() {
  createCanvas(640, 360);
  background(0);

  speech = new p5.Speech(voicesReady);
  speech.ended(resetBg);

  button = select('#speak');
  input = select("#input");
  voiceInput = createSelect();
  pitchInput = createSlider(0, 2, 1, 0.1);
  button.mousePressed(speak);
  voiceInput.parent(select("#voices"));
  pitchInput.parent(select('#pitchInput'));
}

function speak() {
  speech.speak(input.value());
  background(0, 255, 0);
}

function resetBg() {
  background(0);
}

function voicesReady() {
  for (var i = 0; i < speech.voices.length; i++) {
    voiceInput.option(speech.voices[i].name);
  }
  voiceInput.changed(voiceChanged);
  pitchInput.input(pitchChanged);
}

function voiceChanged() {
  speech.setVoice(voiceInput.value());
}

function pitchChanged() {
  speech.setPitch(pitchInput.value());
  select("#pitch").html(pitchInput.value());
}

var speechRec;
var button;
var output;

function setup() {
  noCanvas();

  speechRec = new p5.SpeechRec(gotSpeech);

  button = select('#speak');
  output = select("#output");
  button.mousePressed(startRec);
}

function startRec() {
  speechRec.start();
}

function gotSpeech(speechObj) {
  if (speechObj.success) {
    output.html(speechObj.text);
  }
}

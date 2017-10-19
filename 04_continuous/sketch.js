var speechRec;
var button;
var output;

function setup() {
  noCanvas();

  speechRec = new p5.SpeechRec(gotSpeech);
  speechRec.start(true, false);

  output = select("#output");
}

function gotSpeech(speechObj) {
  if (speechObj.success) {
    output.html(speechObj.text);
  }
}

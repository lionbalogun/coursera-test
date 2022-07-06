(function (window) {
var helloSpeaker = {
  speak :function(name) {
    console.log(speakWord + " " + name);
  }
};
helloSpeaker.speak

var speakWord = "Hello";

window.helloSpeaker= helloSpeaker
})(window);
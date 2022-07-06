( function(){
var helloSpeaker= {
  speak:function (name) {
    console.log(speakWord + " " + name);
  }
};
var speakWord = "Hello";


helloSpeaker.speak

window.helloSpeaker= helloSpeaker
})();
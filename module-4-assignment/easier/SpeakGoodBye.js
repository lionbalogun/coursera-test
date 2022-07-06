(function (window) {
var byeSpeaker = {
  speak:function (name) {
    console.log(speakWord + " " + name);
  }

};

var speakWord = "Good Bye";


byeSpeaker.speak

window.byeSpeaker= byeSpeaker

})(window);
// var drumletter=["w","a","s","d","j","k","l"];
//Button pressed
for (var i = 0; i < (document.querySelectorAll(".drum").length); i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    keyboardpressed(buttonInnerHTML);
    animation(buttonInnerHTML);
  });
}
//key pressed
document.addEventListener("keypress", function(event) {
  keyboardpressed(event.key);
  animation(event.key);
});

function keyboardpressed(key) {

  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(key);

  }
}


function animation(currentKey) {

  var activeB = document.querySelector("." + currentKey);
  activeB.classList.add("pressed");

  setTimeout(function() {
    activeB.classList.remove("pressed");
  }, 1000);
}

"use strict";
const typewriteText = document.querySelector(".typewritten").textContent;
const textContainer = document.querySelector(".placeholder");
const audioOne = new Audio(
  "Mechanical-Keyboard-single-button-presses-10-www.FesliyanStudios.com.mp3"
);
const audioTwo = new Audio(
  "Mechanical-Keyboard-single-button-presses-1-www.FesliyanStudios.com.mp3"
);
const audioThree = new Audio(
  "Mechanical-Keyboard-single-button-presses-2-www.FesliyanStudios.com.mp3"
);
let char = typewriteText.charAt(0);
console.log(typewriteText.length);
let i = 0;
const playButton = document.querySelector(".startTypewrite");
playButton.addEventListener("click", typewriteEffect);

function getRandomNumber() {
  return Math.random() * 50 + 200;
}

function typewriteEffect() {
  if (i < typewriteText.length) {
    let characterAt = typewriteText.charAt(i);
    textContainer.textContent += characterAt;
    if (characterAt == " ") {
      audioTwo.play();
    } else if (getRandomNumber() < 225) {
      audioOne.play();
    } else {
      audioThree.play();
    }
  }
  i++;
  setTimeout(typewriteEffect, getRandomNumber());
}

"use strict";
const typewriteText = document.querySelector(".typewritten").textContent;
const textContainer = document.querySelector(".placeholder");
let char = typewriteText.charAt(0);
console.log(typewriteText.length);
let i = 0;
typewriteEffect();

function typewriteEffect() {
  if (i < typewriteText.length) {
    textContainer.textContent += typewriteText.charAt(i);
    i++;
    setTimeout(typewriteEffect, 100);
  }
}

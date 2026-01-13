const text = "Cinematic Web Developer | Creative Designer";
let index = 0;
const speed = 80;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;

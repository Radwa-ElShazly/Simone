// { <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script> }

const DynamicsText=document.querySelector("h1 span")
const words=["Simone","Designer","Freelancer","Developer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting =false;

const typeEffect = () => {
    const currentWord =words[wordIndex];
    const currentChar =currentWord.substring(0, charIndex);
    DynamicsText.textContent =currentChar;
    DynamicsText.classList.add("stop-blinking")

    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 100);
    }else if (isDeleting && charIndex >0){
    charIndex--;
    setTimeout(typeEffect, 80)
    }else{
        isDeleting=!isDeleting;
        DynamicsText.classList.remove("stop-blinking")
        wordIndex= !isDeleting ? (wordIndex +1) % words.length: wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();
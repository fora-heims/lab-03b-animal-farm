// import functions and grab DOM elements
const horseImg = document.getElementById('horse-img');
const dogImg = document.getElementById('dog-img');
const catImg = document.getElementById('cat-img');

const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
// initialize global state

horseImg.addEventListener('click', () => {
    horseSound.play();
});

dogImg.addEventListener('click', () => {
    dogSound.play();
});

catImg.addEventListener('click', () => {
    catSound.play();
});
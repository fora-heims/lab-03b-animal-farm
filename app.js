// import functions and grab DOM elements
const horseImg = document.getElementById('horse-img');
const dogImg = document.getElementById('dog-img');
const catImg = document.getElementById('cat-img');

const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
// initialize global state

// function removeClass() {
//     horseImg.classList.remove('animate-animal');
//     dogImg.classList.remove('animate-animal');
//     catImg.classList.remove('animate-animal');
// }

horseImg.addEventListener('click', () => {
    horseSound.play();
    horseImg.classList.remove('animate-animal');
    dogImg.classList.remove('animate-animal');
    catImg.classList.remove('animate-animal');
    horseImg.classList.add('animate-animal');
});

dogImg.addEventListener('click', () => {
    dogSound.play();
    horseImg.classList.remove('animate-animal');
    dogImg.classList.remove('animate-animal');
    catImg.classList.remove('animate-animal');
    dogImg.classList.add('animate-animal');
});

catImg.addEventListener('click', () => {
    catSound.play();
    horseImg.classList.remove('animate-animal');
    dogImg.classList.remove('animate-animal');
    catImg.classList.remove('animate-animal');
    catImg.classList.add('animate-animal');
});

document.addEventListener('keyup', event => {
    if (event.key === 'c') {
        catSound.play();
        horseImg.classList.remove('animate-animal');
        dogImg.classList.remove('animate-animal');
        catImg.classList.remove('animate-animal');
        catImg.classList.add('animate-animal');
    } else if (event.key === 'd') {
        dogSound.play();
        horseImg.classList.remove('animate-animal');
        dogImg.classList.remove('animate-animal');
        catImg.classList.remove('animate-animal');
        dogImg.classList.add('animate-animal');
    } else if (event.key === 'h') {
        horseSound.play();
        horseImg.classList.remove('animate-animal');
        dogImg.classList.remove('animate-animal');
        catImg.classList.remove('animate-animal');
        horseImg.classList.add('animate-animal');
    }
});
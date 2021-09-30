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
    horseImg.classList.add('animate-animal');
    setTimeout(function() {
        horseImg.classList.remove('animate-animal');
    }, 800);
});

dogImg.addEventListener('click', () => {
    dogSound.play();
    dogImg.classList.add('animate-animal');
    setTimeout(function() {
        dogImg.classList.remove('animate-animal');
    }, 800);
});

catImg.addEventListener('click', () => {
    catSound.play();
    catImg.classList.add('animate-animal');
    setTimeout(function() {
        catImg.classList.remove('animate-animal');
    }, 800);
});

document.addEventListener('keyup', event => {
    if (event.key === 'c') {
        catSound.play();
        catImg.classList.add('animate-animal');
        setTimeout(function() {
            catImg.classList.remove('animate-animal');
        }, 800);
    } else if (event.key === 'd') {
        dogSound.play();
        dogImg.classList.add('animate-animal');
        setTimeout(function() {
            dogImg.classList.remove('animate-animal');
        }, 800);
    } else if (event.key === 'h') {
        horseSound.play();
        horseImg.classList.add('animate-animal');
        setTimeout(function() {
            horseImg.classList.remove('animate-animal');
        }, 800);
    }
});
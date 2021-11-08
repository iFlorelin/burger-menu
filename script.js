'use strict'

function move(){
    let menu = document.querySelector('.menu');
    let header = document.querySelector('.nav');
    let line = menu.children;

    menu.classList.toggle('move');
    line[3].classList.toggle('movex');
    header.classList.toggle('nav__height');

}

document.querySelector('.menu').addEventListener('click', move);
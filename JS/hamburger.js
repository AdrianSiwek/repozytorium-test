const burgerBtn = document.querySelector('.burger');
const barsIcone = document.querySelector('.fa-bars');
const xIco = document.querySelector('.fa-times');
const nav = document.querySelector('nav ul');
// const burgerBtn = document.querySelector('.burger');

const handleNav = () => {
    nav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    xIco.classList.toggle('hide');
    barsIcone.classList.toggle('hide');


}

burgerBtn.addEventListener('click', handleNav);
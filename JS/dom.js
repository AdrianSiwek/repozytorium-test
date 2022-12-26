// const classLi = document.querySelectorAll('.menu-item');

// console.log(classLi);

// const heading = document.querySelector('h1');

// console.log(heading);

// const paragraf = document.querySelectorAll('p');

// console.log(paragraf);

// const divation = document.querySelector('.test');

// console.log(divation);

// const divationP = divation.querySelector('#test');

// console.log(divationP);

const container = document.querySelector('div');
const pItem = document.createElement('p');
pItem.textContent = 'Siemanko';

container.appendChild(pItem);

const ulList = document.querySelector('ul');
ulList.textContent = 'Ulubione Języki Programowania';


const liItem = document.createElement('li');
liItem.textContent = 'Java Script';
ulList.appendChild(liItem);

const para = document.createElement('p');
para.textContent = 'Tworzę nową stronę';

container.appendChild(para);


const input = document.querySelector('.input');
const underInput = document.querySelector('.under-input');

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        underInput.textContent = input.value;
    }
})

const btn = document.querySelector('.button');

const test = () => {
    console.log('Doubel click');
}

btn.addEventListener('click', test);
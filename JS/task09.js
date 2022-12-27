const body = document.querySelector('body');
const ul = document.createElement('ul');
body.append(ul);

const number = 10;

for (let i = 1; i <= number; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = i;
    ul.append(liItem);
}


// const lastChild = ul.lastElementChild;
const lastChild = ul.querySelector('li:last-child');
lastChild.textContent = 'I am last number.';

lastChild.style.backgroundColor = 'royalblue';
lastChild.style.padding = '20px 40px';
lastChild.style.fontSize = '48px';


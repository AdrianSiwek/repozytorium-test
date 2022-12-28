const ulList = document.querySelector('ul');
const liList = document.createElement('li');

ulList.appendChild(liList);

const imgCreate = document.createElement('img');
liList.append(imgCreate);

imgCreate.setAttribute('src', './Image/jesien-na-podhalu.jpg')
imgCreate.setAttribute('alt', 'drzewa w roznych kolorach');

// imgCreate.addEventListener('click', () => {
//     alert('Jesien na podhalu');
// })

const timing = () => {
    console.log('Jesien na podhalu')
}

setTimeout(timing, 2000);
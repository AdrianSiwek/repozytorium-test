const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('.remove');
const toggleBtn = document.querySelector('.toggle');
const texts = document.querySelector('p');

const addClass = () => {
    texts.classList.add('test');
}

const removeClass = () => {
    texts.classList.remove('test');
}


addBtn.addEventListener('click', addClass);
removeBtn.addEventListener('click', removeClass);
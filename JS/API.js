const clickBtn = document.querySelector('button');
const img = document.querySelector('img');

const URL = 'https://dog.ceo/api/breeds/image/random';


clickBtn.addEventListener('click', () => {
    fetch(URL)
        .then(ress => ress.json())
        .then(data => img.setAttribute('src', data.message))
        .catch(err => console.error(err))
})
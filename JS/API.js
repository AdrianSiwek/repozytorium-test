// const clickBtn = document.querySelector('button');
// const img = document.querySelector('img');

// const URL = "https://dog.ceo/api/breeds/image/random";

// clickBtn.addEventListener('click', () => {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => img.setAttribute('src', data.message))
//         .catch(err => console.error(err))
// })


const ones = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const URL = "https://dog.ceo/api/breeds/image/random";

fetch(URL)
    .then(response => response.json())
    .then(data => ones.setAttribute('src', data.message))
    .catch(err => console.error(err))


axios.get(URL).then(res => {
        two.setAttribute('src', res.data.message);
    })


async function showImage() {
    const response = await axios.get(URL)
    three.setAttribute('src', response.data.message)
}
    
showImage();
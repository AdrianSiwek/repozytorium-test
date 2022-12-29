const liItems = document.querySelectorAll('li');

let number = 1;

for (const item of liItems) {
    item.textContent = number;
    item.dataset.id = number;
    number++;
}

const thirdLi = document.querySelector('[data-id="3"]');

console.log(thirdLi.closest('.wrapper'));
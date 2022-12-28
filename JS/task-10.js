const btnOne = document.querySelector('.btn1');
const btnTwo = document.querySelector('.btn2');
const square = document.querySelector('.square');
const paraOne = document.querySelector('.p1');
const paraTwo = document.querySelector('.p2');

const hello = () => {
    console.log('Cześć')
}

const red = (event) => {
  // highlight the mouseover target
  event.target.style.background = "red";
    
}

const blue = (event) => {
    event.target.style.background = "royalblue";
}
const toggleClass = () => {
    paraOne.classList.toggle('show');
    paraTwo.classList.toggle('show');

}
// const addClass = () => {
//     paraOne.classList.add('show')
//     paraTwo.classList.remove('show')
// }

// const removeClass = () => {
//     paraOne.classList.remove('show')
//     paraTwo.classList.add('show')
// }

btnTwo.addEventListener('click', toggleClass);

// btnTwo.addEventListener('click', removeClass);
square.addEventListener('mouseleave', blue);
square.addEventListener("mouseover", red);
btnOne.addEventListener('dblclick', hello);


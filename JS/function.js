// function multiply(...args) {
//   let total = 1;

//   for (const argument of args) {
//     // total = total * argument;
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3, 4, 5)); //  120


// const arr1 = [0, 1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8, 9];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

//const a = 30;


// const nameAge = function (name, age) {
//     console.log(`Mam na imię ${name} i mam ${age} lat`);
// }

// nameAge("Adrian", 30)

const nameAge2 = (name, age) => console.log(`Mam na imię ${name} i mam ${age} lat`);

nameAge2("Adrian", 30);

const days = ['monday', 'tuesday', 'wednesday', 'thursday'];

const days2 = days.map(day => console.log(day));

const cars = (name, speed) => console.log(`to jest ${name} ${speed} i rozwija max. prędkość`);
cars('Ferrari', 333)
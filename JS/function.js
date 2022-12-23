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

// const nameAge2 = (name, age) => console.log(`Mam na imię ${name} i mam ${age} lat`);

// nameAge2("Adrian", 30);

// const days = ['monday', 'tuesday', 'wednesday', 'thursday'];

// const days2 = days.map(day => console.log(day));

// const cars = (name, speed) => console.log(`to jest ${name} ${speed} i rozwija max. prędkość`);
// cars('Ferrari', 333)



// let score;

// const add = (nam1, nam2) => {
//     score = nam1 + nam2;
//     if (score % 2 === 0) {
//         name1();
//     } else {
//         name2();
//     }
// }

// const name1 = () => {
//     console.log(`Liczba ${score} jest parzysta`);
// }

// const name2 = () => {
//     console.log(`Liczba ${score} jest nieparzysta`);
// }
// add(1, 2);




const add = (nam1, nam2) => {
    const score = nam1 + nam2;

    (score % 2 === 0)? name1(score) : name2(score);
}

const name1 = (nam1) => {
    console.log(`Liczba ${nam1} jest parzysta`);
}

const name2 = (nam2) => {
    console.log(`Liczba ${nam2} jest nieparzysta`);
}

add(9,4)
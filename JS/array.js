// const fruits = ["apple", "mango", "banana", "peach", "orange", "plum", "pear"];

// for (let i = 0; i < fruits.length; i += 1){
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (i = 0; i < order.length; i++){
//         total += order[i];
//     }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))


// function findLongestWord(string) {
//   // Change code below this line
//     let longWord = "";
//     let wordLongest = string.split(" ");
//     for (let i = 0; i < wordLongest.length; i++){
//         if (wordLongest[i].length > longWord.length) {
//             longWord = wordLongest[i];
//         }
//         return longWord
//     }


//   // Change code above this line
// }

// console.log(findLongestWord("Google do a roll"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i++){
//         numbers.push(i);
//     }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 30));


// const clientsNew = [
//   "Mango", // 0
//   "Apple",
//   "Apple",
//   "Poly", // 1
//   "Ajax", // 2
//   "Kiwi", // 3
// ]
// const clientFinde = "Apple";
// let message;
// for (const client of clients) {
//   if (client === clientFinde) {
//     message = 'Wszystko jest ok';
//     break
//   }
//   message = 'Nie istnieje taki owoc';
// }

// console.log(message);
// const arrayClientsLast = clients.length - 1;
// console.log(clients[1]);
// console.log(clients.length);
// console.log(clients[arrayClientsLast]);


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34, 48, 99, 5, 8];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] > threshold) {
//     console.log(numbers[i]);
//   }
// }

// const message = ['JavaScript', 'is', 'the', 'best'];
// // console.log(message.split(" "));
// console.log(message.join("-"));


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Mango"));
// console.log(clients.includes("Ajax"));

// clients.push("Americano");
// clients.push("FlatWhite");
// console.log(clients);
// clients.pop();
// console.log(clients);

// const arrayMix = clientsNew.concat(clients);
// console.log(arrayMix);

// const deletedArrayMix = arrayMix.splice(0, 4);
// console.log(deletedArrayMix);


// const array = [5, 8, 10, 23, 48, 60];

// for (const arr of array) {
//     console.log(arr / 5);
// }



// for (const arr of array) {
//     if (arr % 2 === 0) {
//         console.log(`%cTa liczba jest parzysta ${arr}`, 'background-color: gold; color: black');
//     } else {
//         console.log(`%cTa liczba jest nieparzysta ${arr}`, 'background-color: tomato; color: black');
//     }
// }


// const drinks = ['pepsi', 'cola', 'juic', 'whisky'];
// const meals = ['pizza', 'lion', 'burger'];

// const menu = [...drinks, ...meals];
// console.log(menu);


// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ['red', 'green', 'blue', true, 123];
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

// const numbers2 = numbers.slice(0, 2);
// console.log(numbers2);

// const numbers3 = numbers.slice(-3);
// console.log(numbers3);

// const randomStuff = colors.splice(-2);
// console.log(randomStuff);

// const newCars = cars.splice(2, 4, 'test');
// console.log(cars);


// const letters = ['c','d'];

// letters.unshift('a', 'b');
// letters.push('e', 'f');
// console.log(letters);

// console.log(letters.includes('c'));



// const numbers = [0, 0, 1, 1, 2, 2, 2, 2];
// const meals = ['pizza', 'hamburger', 'carrot'];

// const newArrays = numbers.concat(meals);
// console.log(newArrays);

// const newArray = [...numbers, ...meals];
// console.log(newArray);


// const numbers = [1, 5, 13, 26, 48];

// const mapNumbers = numbers.map(number => number * 5);
// console.log(mapNumbers);

// for (const num of numbers) {
//     if (num % 2 === 0) {
//         console.log(`${num} to jest liczba parzysta`);
//     } else {
//         console.log(`${num} to jest liczba nieparzysta`);
//     }
// }


// const colors = ['red'];

// colors.unshift('blue');
// colors.push('green');
// console.log(colors);

// for (const color of colors) {
//   console.log(`Mój ulubiony kolor to ${color.charAt(0).toUpperCase() + color.slice(1)}`);
// }


const myCar = "Audi, Mercedes, BMW, Nissan, Doge";

const cars = myCar.split(', ');
console.log(cars);

if (cars.length > 3) {
  console.log("Jest OK");
} else {
  console.log("Jest Nie Ok");
}



  if (cars.includes('Audi')) {
    cars.push("Ferrari");
  } else {
    cars.pop();
  }


console.log(cars);
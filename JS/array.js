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


const clientsNew = [
  "Mango", // 0
  "Apple",
  "Apple",
  "Poly", // 1
  "Ajax", // 2
  "Kiwi", // 3
]
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

const message = ['JavaScript', 'is', 'the', 'best'];
// console.log(message.split(" "));
console.log(message.join("-"));


const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Mango"));
console.log(clients.includes("Ajax"));

clients.push("Americano");
clients.push("FlatWhite");
console.log(clients);
clients.pop();
console.log(clients);

const arrayMix = clientsNew.concat(clients);
console.log(arrayMix);

const deletedArrayMix = arrayMix.splice(0, 4);
console.log(deletedArrayMix);
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


function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
    for (let i = min; i <= max; i++){
        numbers.push(i);
    }
  // Change code above this line
  return numbers;
}
console.log(createArrayOfNumbers(1, 3)); 
console.log(createArrayOfNumbers(14, 30));
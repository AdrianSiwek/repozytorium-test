// console.log("Hello World");

// console.log("JavaScript is awesome".toLocaleUpperCase());

// const age = 33;
// console.log(typeof age);


// // const falanga = prompt("Proszę wpisać poprawne hasło");
// // console.log(falanga);

// const x = 10;
// const y = 5;

// console.log(x - y);
// console.log(x + y);
// console.log(x * y);
// console.log(x / y);

// console.log(x == y);

// console.log(x != y);



// console.log(Number.parseFloat(25.8));

// console.log(10 + 5 + "305")
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// const message = "Dzień dobry, Tutaj Adrian Siwek";
// console.log(message.length);

// console.log(("sAmSuNg").toLocaleUpperCase() === "SAMSUNG");

// const nameS = "Adrian jest mistrzem JavaScript";
// console.log(nameS.indexOf("je"));


// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".six.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// let cost = 0;
// const subscription = "pro";

// if (subscription === "free") {
//   cost = 100;
// } else {
//     cost = 500
// }

// console.log(cost); // 100
// const age = 21;
// const type = age >= 18 ? "true" : "false";
// console.log(type);

// let people = 20;
// const maxPeople = 30;

// while (people < maxPeople){
// console.log(people);
//     people += 1;
// }

const people = 30;

for (let i = 0; i < people; i += 1){
    if (i % 2) {
        continue;
    }
    console.log("Nieparzyste i", i);
}
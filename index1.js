//===================================================
const message = document.querySelector("#message");
console.log(message.value); // Default textarea message

//===================================================
const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href); // https://s.codepen.io/about

//===================================================
const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src = 'https://placeimg.com/640/480/tech';


const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";


const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image); 
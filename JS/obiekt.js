//Keys

const book = {
    author: "Trudi Canavani",
    title: "Guilds of Mage",
    generes: 2010,
    riting: 8.495,
    all: "Trylogy"
}

book.title= "Novice"

// console.log(Object.keys(book));
// console.log(Object.values(book));

const newBook = Object.create(book);
// console.log(newBook);
// console.log(newBook.hasOwnProperty('title'));

//------------------------------------------------------

//Destrukturyzacja

// const title = book.title;
// const author = book.author;
// const generes = book.generes;
// const riting = book.riting;
// const all = book.all;

// const [author, title, generes, riting, all] = book;

// const arrayOfBooks = [book, book, book];
// for (const el in arrayOfBooks) {
//     const { author, title, generes, riting, all } = el;
//     console.log(author);
// }

//------------------------------------------------------

//Destrukturyzacja Array

// const rgb = [200, 300, 100];
// const [red, yelow, green] = rgb;
// console.log(red, yelow, green);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {
//   ...defaultSettings, ... overrideSettings
// };

// console.log(finalSettings);


// const myBook = {
//   title: "Ogniem i Mieczem",
//   author: 'Henryk Sienkiewicz',
//   years: 1921
// };

// const myFavourMeals = {
//   firstMeals: 'tomato soup',
//   twoMeals: 'pierogi',
//   thirdMeals: 'naleśniki'
// };

// const myUsser = {
//   name: "Anika",
//   age: 30,
// }

// myUsser.lastName = "Kowalska";
// myUsser['favour-color'] = 'orange'
// console.log(myUsser);

// const myMeals = "wołowina"
// const myDog = {
//   name: "Maaksik",
//   myAgeDoge: 2,
//   myMeals
// }


// console.log(myDog);

// const myUsser = {
//   name: 'Ada',
//   showUsser () {
//     console.log(this.name);
//   }
// }
// myUsser.showUsser();

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.hello = function () {
//     console.log(`Cześć ${this.name}`)
//   }
// }

// const newUsser = new User('Karol', 30);
// console.log(newUsser);
// User.prototype.hello = function () {
//     console.log(`Cześć ${this.name}`)
// } //prototyp, dodajemy go do prototypów na consoli ale mozemy z niego skorzystać
  
// newUsser.hello();


// const aBtn = document.querySelector('.a');
// const bBtn = document.querySelector('.b');
// const cBtn = document.querySelector('.c');

// const p = document.querySelector('p');

// function Meals(name, price) {
//   this.name = name;
//   this.price = price;
// }

// const newMeals = new Meals('pizza', 34);
// const newMeals2 = new Meals('zupa', 18);
// const newMeals3 = new Meals('ryba', 48)

// Meals.prototype.hello = function () {
//   console.log(`${this.name} kosztuje ${this.price}`)
// }

// aBtn.addEventListener('click', () => { newMeals.hello() });
// bBtn.addEventListener('click', () => { newMeals2.hello() });
// cBtn.addEventListener('click', () => {newMeals3.hello()});


function Car(name, price) {
  this.name = name;
  this.price = price;
}

Car.prototype.hello = function () {
  console.log(`${this.name} kosztuje ${this.price}`)
}

Car.prototype.engine = function () {
  console.log(`${this.name} to diesel`)
}

const newCars = new Car('Audi', 35000)
newCars.hello()
newCars.engine()


class Car2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  engine() {
  console.log(`${this.name} to diesel`)
}

  hello() {
  console.log(`${this.name} kosztuje ${this.price}`)
}
}

const newCars2 = new Car2('Mercedes', 500000)
console.log(newCars2.engine());
console.log(newCars2.hello())
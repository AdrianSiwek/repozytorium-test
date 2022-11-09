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

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {
  ...defaultSettings, ... overrideSettings
};

console.log(finalSettings);


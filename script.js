// function greet(name) {
//   console.log(`Hello ${name}`);
//   console.log("Hello " + name);
// }

// greet("Sai");
// greet("Sanjeev");

// // function add(a, b) {
// //   console.log(a + b);
// // }

// const add = (a, b) => {
//   console.log(a + b);
// };

// add(4, 7);
// add(8374384, 2873428374);

// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }

// outer();
// outer();

// Closure example:

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
let fn = outer();
fn();
fn();

const person1 = {
  name: "Sanjeev",
  project: "Honda",
  company: "Cognizant",
  location: "Hyderabad",
  details: function () {
    console.log(
      `Yeah, ${this.name} works for ${this.project} in ${this.location}`
    );
  },
};

const person2 = {
  name: "Navaneetha",
  project: "JnJ",
  company: "Accenture",
  location: "Hyderabad",
};

function sayMyName() {
  console.log(`My name is ${this.name} and I work for ${this.company}`);
}

person1.details.call(person2);

sayMyName.call(person1);
sayMyName.call(person2);

///////////////////////////////////////////////////////////////////////////////////////////

// function Company(name, abbreviation) {
//   this.title = name;
//   this.abb = abbreviation;
// }

// const cmp1 = new Company("Capgemini", "CG");
// const cmp2 = new Company("Cognizant", "CTS");

// Company.prototype.getFullName = function () {
//   return this.title + ", " + this.abb;
// };

// console.log(cmp1.getFullName());
// console.log(cmp2.getFullName());

//////////////////////////////////////////////////////////////////////////////////////////////

// function Person(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
// }

// Person.prototype.getFullName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

// function SuperHero() {
//   this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrime = function () {
//   console.log("Fighting crime");
// };

// const batman = new SuperHero();

////////////////////////////////////    CLASS    ///////////////////////////////////////////////

class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}

const classP1 = new Person("Cillian", "Murphy");
const classP2 = new Person("Virat", "Kohli");

console.log(`I like ${classP1.sayMyName()}'s attitude`);
console.log(classP2.sayMyName());
console.log(classP2.firstName);

/////////////////////////////   CLASS Prototypal inheritance  //////////////////////////////////

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }

  fightCrime() {
    console.log("Fighting Crime");
  }
}

const batman = new SuperHero("Bruce", "Wayne");
console.log(batman.sayMyName());

////////////////////////////////////////Iterables and iterators   ///////////////////

const title = "Sanjeev";
for (const letter of title) {
  console.log(letter);
}

const arr = ["S", "a", "n", "j", "e", "e", "v"];
for (const ar of arr) {
  console.log(ar);
}

///////////////////////////////////         ASYNC JS       ///////////////////////////////////////

// setTimeout(function hello() {
//   alert("Hello Sanjeev");
//   setTimeout(hello, 2000);
// }, 2000);

// setInterval(function hello() {
//   console.log("Hello");
// }, 2000);

console.log("July 3rd");

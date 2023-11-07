const { faker, fakerAR } = require("@faker-js/faker");
const lang = require("../lib/languages");
const AR_names = require("../lib/arabicNames.js");

//@param int range
//random int with the range
function randomInt(range) {
  return Math.floor(Math.random() * range);
}

//@param array[]
//get random value in the array
function randomValueInArray(arr) {
  return arr[randomInt(arr.length)];
}

// generate User stuff (name, lastname, full name)

const startTime = performance.now();
function generateFirstName(la) {
  // if (lang.find(lang=> lang=la)) {
    if (la === "AR") {
      return randomValueInArray(AR_names);
    } else {
      return faker.person.firstName();
    }
  
  //} else{
  //   console.log("error ")
  // }
}
const endtTime = performance.now();

function generateLastName(){
  return faker.person.lastName();
}

function FullName(){
  return `${faker.person.firstName()} ${faker.person.lastName()}` ;
}
var executionTime = endtTime - startTime;

//random city (in english)
function generateCity() {
  return {
    city: faker.location.city(),
    zcode:faker.location.zipCode(),
  };
}


module.exports = {
  generateFirstName,
  generateLastName,
  FullName,
  generateCity,
  executionTime,
};

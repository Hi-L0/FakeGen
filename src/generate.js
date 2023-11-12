const { faker, fakerAR } = require("@faker-js/faker");
// const lang = require("../lib/languages");
const AR_names = require("../lib/arabicNames.js");
const randomValueInArray = require("./methods.js");

// generate User stuff (name, lastname, full name)

const startTime = performance.now();

function id() {
  return faker.string.uuid();
}

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

function generateLastName() {
  return faker.person.lastName();
}

function FullName() {
  return `${faker.person.firstName()} ${faker.person.lastName()}`;
}

function email() {
  return faker.internet.email();
}
var executionTime = endtTime - startTime;


//job title
function job(){
  return faker.person.jobTitle
}

//random city (in english)
function generateCity() {
  return faker.location.city();
  // zcode:faker.location.zipCode(),
}

function generateAddress() {
  return faker.location.streetAddress();
}

//generate dates between some dates in params
// function betweenDates(start, end){
//   if(start !== null || end !== null )
//     {
//       return faker.date.between({start,end})
//     } else{
//       return console.log('one or multiple parameters are messing in betweenDates')
//     }
// }

//@param int size
//return one or (size) products

function products(size) {
  const prods = [];
  if (size !== null) {
    var i = 0;
    while (i < size) {
      prods.push(faker.commerce.product());
      i++;
    }
  }else{
    prods.push(faker.commerce.product());
  }
  return prods;
}

module.exports = {
  id,
  generateFirstName,
  generateLastName,
  generateAddress,
  FullName,
  job,
  email,
  generateCity,
  products,
  // betweenDates,
  executionTime,
};

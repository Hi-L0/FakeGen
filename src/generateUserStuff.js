const { faker, fakerAR } = require("@faker-js/faker");
const lang = require("../lib/languages.js");
const AR_names = require("../lib/arabicNames.js");

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
function generateLastName(){
  return faker.person.lastName();
}

function generateFUllName(){
  return `${faker.person.firstName()} ${faker.person.lastName()}` ;
}
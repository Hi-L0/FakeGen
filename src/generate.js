const { v4: uuidv4 } = require('uuid');
// const lang = require("../lib/languages");
// const AR_names = require("../lib/arabicData.js");
const {randomValueInArray,multiplValueArr, randomAdress, randomObject, randomLocation} = require("./methods");
const {namesArray,countries,citiesArrays,lastNames, jobs, productsArray, streets, companyNames} = require('../lib/EnData.js')

// generate User stuff (name, lastname, full name)

// const startTime = performance.now();

function id() {
  return uuidv4();
}

//generate firstname
function firstName() {

  return randomValueInArray(namesArray);
  // if (lang.find(lang=> lang=la)) {
  // if (la === "AR") {
  //   return randomValueInArray(AR_names);
  // } else {
  //   return faker.person.firstName();
  // }
  // randomValueInArray()
}
// const endtTime = performance.now();

//generate lastname
function lastName() {
  return randomValueInArray(lastNames);
}

// generate first name
function fullName() {
  return `${firstName()} ${lastName()}`;
}

//generate email
function email() {
  let firsthalf= firstName()+lastName()
  let lasthalf=["exemple",'outlook',"gmail","mail","ukil","test"];
  var index= Math.floor(Math.random() * lasthalf.length);
  return `${firsthalf}@${lasthalf[index]}.com`
}
// var executionTime = endtTime - startTime;


//job title
function job(){
  return randomValueInArray(jobs)
}

//random city (in english)
function city() {
  return randomValueInArray(citiesArrays);
}
function country(){
  return randomValueInArray(countries)
}
//generate random zipcodes
function zipCode() {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate random locations:

function location(){
   return randomLocation(
      city(),country(),zipCode()
    )
}



function address() {
  return randomAdress(randomValueInArray(streets),city(),country(),zipCode())
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


function company(){
  return randomValueInArray(companyNames);
}

//@param int size
//return one or (size) products

function products(size) {
  return multiplValueArr(size,productsArray)
}

//return either a true or false
function boolean() {
  return Math.random() < 0.5; // Returns true or false with roughly equal probability
};

function phoneNumber(){

}

module.exports = {
  id,
  firstName,
  lastName,
  address,
  fullName,
  job,
  email,
  city,
  products,
  location,
  boolean,
  zipCode,
  country,
  company,
  // betweenDates,
  // executionTime,
};

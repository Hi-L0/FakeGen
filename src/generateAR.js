const { fakerAR } = require("@faker-js/faker");
const AR_names = require("../lib/arabicNames");
const cities_MR = require("../lib/arabicCitiesMR");
const randomValueInArray = require('./methods')

function generateFirstName() {
    return randomValueInArray(AR_names);
}

function generateLastName(){
    return fakerAR.person.lastName();
}
  
function FullName(){
    return `${fakerAR.person.firstName()} ${fakerAR.person.lastName()}`
}

function cityMR(){
    return randomValueInArray(cities_MR);
}

function generateCity(){
    return fakerAR.location.city()
}

function generateAddress(){
    return fakerAR.location.streetAddress()
}


module.exports={
    FullName,
    generateLastName,
    generateFirstName,
    generateCity,
    cityMR,
    generateAddress,
}
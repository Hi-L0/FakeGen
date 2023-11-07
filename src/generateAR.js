const { fakerAR } = require("@faker-js/faker");
const AR_names = require("../lib/arabicNames");
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



module.exports={
    FullName,
    generateLastName,
    generateFirstName,
}
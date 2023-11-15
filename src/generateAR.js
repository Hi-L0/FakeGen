// const { fakerAR } = require("@faker-js/faker");
const {
  AR_names,
  cities_MR,
  LastNames,
  arabicLastNames,
  arabicProducts,
  StreetNamesAr,
  citiesAr,
  CountriesAr,
  companyNamesAr,
} = require("../lib/arabicData");
const {randomValueInArray, multiplValueArr, randomAdress, randomLocation} = require("./methods");

//this is for some methods that are identical to the normal generate
const { id, zipCode, boolean, email } = require("./generate");

function firstName() {
  return randomValueInArray(AR_names);
}

function lastName() {
  // return fakerAR.person.lastName();
  return randomValueInArray(arabicLastNames);
}

function fullName() {
  return `${firstName()} ${lastName()}`;
}

function cityMR() {
  return randomValueInArray(cities_MR);
}

function city() {
//   return fakerAR.location.city();
    return randomValueInArray(citiesAr) 
}

function country() {
  return randomValueInArray(CountriesAr);
}

function location() {
  return randomLocation(city(),country(),randomZipCode())
}

function address() {
    return randomAdress(randomValueInArray(StreetNamesAr),city(),country(),randomZipCode())
}

function products(size) {
    return multiplValueArr(size,arabicProducts)
}

function company(){
    return randomValueInArray(companyNamesAr)
}

module.exports = {
  fullName,
  lastName,
  firstName,
  city,
  location,
  cityMR,
  address,
  id,
  zipCode,
  products,
  country,
  boolean,
  email,
  company,
};

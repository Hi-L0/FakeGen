const fakeGen = require("./src/generate");
const fakeGenAR = require("./src/generateAR");

var value = {
  user: {
    // id: fakeGen.id(),
    name: fakeGen.generateFirstName(),
    // lastname: fakeGenAR.generateLastName(),
    // fullname: fakeGen.FullName(),
    // city: fakeGen.generateCity(),
    // adress: fakeGen.generateAddress(),
    // city: fakeGenAR.cityMR(),
    products:fakeGen.products(1),  // number as params
    // date:fakeGen.betweenDates()
  },
  // size:AR_names
};

console.log(value);

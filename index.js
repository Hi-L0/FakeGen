const randomize=require('./src/generate')
const randomizeAR = require("./src/generateAR")

var value ={
    name: randomize.generateFirstName(),
    lastname: randomize.generateLastName(),
    fullname: randomizeAR.FullName(),
    localisation: randomize.generateCity(),
    
}


console.log(value)
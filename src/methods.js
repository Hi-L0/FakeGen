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

module.exports= randomValueInArray
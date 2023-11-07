
function randomInt(range) {
    return Math.floor(Math.random() * range);
  }

function randomValueInArray(arr) {
    return arr[randomInt(arr.length)];
}

module.exports= randomValueInArray
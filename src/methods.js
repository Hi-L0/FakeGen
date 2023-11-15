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

function multiplValueArr(size,array){
  if (size != null) {
    const vals = [];
    var i = 0;
    while (i < size) {
      vals.push(randomValueInArray(array));
      i++;
    }
    return vals;
  }else{
    return randomValueInArray(array);
  }
}
function randomAdress(street,city,country,zip){
  var address_country=country;
  var street=street
  var address_city=city
  var code=zip
  var address= `${street} ${address_city} ${address_country} ${code}`  
  return address;
}

function randomLocation(city,country,zip){
  return {
    city:city,
    country:country,
    Zip:zip,
  }
}

module.exports= {randomValueInArray,multiplValueArr,randomAdress,randomLocation}
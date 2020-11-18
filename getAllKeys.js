function getAllKeys(input){
  let arr = [];
  for(x in input){
    arr.push(x);
  }
  return arr
}

var input = {
  name : 'Sam',
  age : 25,
  hasPets : true
};

console.log(getAllKeys(input))
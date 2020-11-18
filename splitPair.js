function splitPairs(input) {
  //if input.length % 2 === 1 => input += '_'
  //use a for loop to iterate by two and split and .push each set of two chars into returnArray
  
  let returnArray = [];
  let string = input;

  if(input.length % 2 ===1){
    string += '_';
  }

  for(let i = 0; i < string.length; i += 2){
    returnArray.push(string.slice(i, i+2));
  }
  return returnArray
}

function assertEqualArrays(actual, expected, testName){
  if(JSON.stringify(actual) === JSON.stringify(expected)){
    console.log('passed');
  } else {
    console.log('failed\n\nactual: ' + actual + '\nexpect: ' + expected);
  }
}

string1 = 'this is a string';
expect1 = ['th', 'is', ' i', 's ', 'a ', 'st', 'ri', 'ng'];

assertEqualArrays(splitPairs(string1), expect1, 'string1 test');

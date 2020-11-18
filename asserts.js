function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed');
  } else {
    console.log('failed\n\nactual: ' + actual + '\nexpect: ' + expected);
  }
}

function assertEqualArrays(actual, expected, testName){
  if(JSON.stringify(actual) === JSON.stringify(expected)){
    console.log('passed');
  } else {
    console.log('failed\n\nactual: ' + actual + '\nexpect: ' + expected);
  }
}
function sumAltitudeDeltas(arr, start, end){
    //declare for total
    //loop through add 2x difference if arr[i+1] > arr[i]
    //add difference if arr[i+1] < arr[i]
    //return total

  var total = 0;

  for(var i = start; i < end; i++){
    if(arr[i+1] > arr[i]){
      total += ((arr[i+1] - arr[i]) * 2)
    } else {
      total += (arr[i] - arr[i + 1]);
    }
  }
  return total
}

//asserts

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + ']\n\nactual: ' + actual + '\nexpect: ' + expected)
  }
}


//tests

let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
console.log(output_0); //--> 6

let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
console.log(output_1); //--> 7

let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
console.log(output_2); //--> 2

let output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
console.log(output_3); //--> 15

let output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
console.log(output_4); //--> 50

let output_5 = sumAltitudeDeltas([4,1,1,1,5,2,1], 1, 4);

assertEqual(output_0, 6, 'test for output_0')
assertEqual(output_5, 8, 'test for output_5')


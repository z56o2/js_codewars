function solution(arr){
  //takes in an array of numbers in numerical order and returns a string of the numbers with any consecutive set of 3 or more returned in the form first - last
  //loop through array and push consective sets of numbers to groupsArray
  //loop through groupsArray, send each array element to function makeTheStrings(arr) and .push the returned strings into finalArray
  //return finalArray.join('')

  let finalArray = [];
  let groupsArray = [];
  let botOfSlice = 0;
  let topOfSlice = 1;

  for(let i = 0; i < arr.length; i++){
    if(arr[i + 1] -1 === arr[i]){
      topOfSlice = i + 2;
    } else {
      groupsArray.push(arr.slice(botOfSlice, topOfSlice));
      botOfSlice = i + 1;
      topOfSlice = i + 2
    }
  }
  
  for(let j = 0; j < groupsArray.length; j++){
    finalArray.push(makeTheStrings(groupsArray[j]));
  }
  return finalArray.join(',');
}

function makeTheStrings(arr){
  //takes elements of the array and turns them into strings and sends them back
  if(arr.length === 1){
    return String(arr[0]);
  } else if(arr.length === 2){
    return arr[0] + ',' + arr[1];
  } else {
    return arr[0] + '-' + arr[arr.length - 1]
  }
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed');
  } else {
    console.log('failed\n\nactual: ' + actual + '\nexpect: ' + expected);
  }
}


//console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

//solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
// returns "-4--1,2,3,5,6,12-15,17"



expected = "-6,-3-1,3-5,7-11,14,15,17-20"
assertEqual(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), expected, 'first test' )

expected2 = "-4--1,2,3,5,6,12-15,17";
assertEqual(solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]), expected2, 'secod test' )

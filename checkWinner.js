function checkWinner(arr){
  //looking for a string of 'redredredred' or 'blackblackblackblack
  //loop through the string and change each element to type "string" in place
  //use .join('') to create single string
  // use .indexOf > -1 to find red or black

  var arrString = arr.toString();

  if(arrString.indexOf('red,red,red,red') > -1){
    return 'Red Wins!';
  } else if (arrString.indexOf('black,black,black,black') > -1){
    return 'Black Wins!';
  } else {
    return 'Draw!'
  }
}


// let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
// console.log(blackWinner); //-> 'Black Wins!'

// let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
// console.log(redWinner); //-> 'Red Wins!'

// let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
// console.log(draw); // -> 'Draw!'

console.log(checkWinner([0,0,0, 'red', 'red', 'red', 'red']))
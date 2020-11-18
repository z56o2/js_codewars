function validSolution(board){
  var col = [];
  var block = [];
  var r = 0;  

  for(let j = 0; j < 9; j++){
    col = [];
    if(!rowChecker(board[j])){return false};
    for(let k = 0; k < 9; k++){
      col.push(board[k][j]);
    }
    if(!rowChecker(col)){return false};
  }

  for(let i = 0; i < 9; i++){
    for(let l = 0; l < 3; l++){
      block = block.concat(board[r + l].splice(0,3));
      }
      console.log(board);
      if(!rowChecker(block)){return false};
      block = [];
      r < 6 ? r += 3 : r = 0;
    }
  return true
}



function rowChecker(arr){
  var fromArr = Array.from(arr);
  return JSON.stringify(fromArr.sort((a,b) => a-b)) === '[1,2,3,4,5,6,7,8,9]'
}

let test1 = [1,2,4,3,5,6,7,9,8];

let input1 = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]];

//console.log(rowChecker(test1));

console.log(validSolution(input1));




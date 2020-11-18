function highestScoringWord(string) {
  //string.toLowerCase()
  //declare variable for highWord;
  //declare variable for highScore
  //.split the string with (' ');
  //send each word to helper function for scoring
  //returns the highest scoring word as a string

  let highWord = '';
  let highScore = 0;
  let currentScore = 0;
  let splitString = string.toLowerCase().split(' ');
  
  for(let i = 0; i < splitString.length; i++){
    currentScore = scoreTheWord(splitString[i]);
    if(currentScore > highScore){
      highScore = currentScore;
      highWord = splitString[i];
    } 
  }
  return highWord
}

function scoreTheWord(string){
  //declare an object literal alphaScores with scores for a through z
  //declare a wordSum to collect the running value
  //loop through string and check alphaScores.(string[i])

  let wordSum = 0;

  let alphaScores = {
    'a' : 1,
    'b' : 2,
    'c' : 3,
    'd' : 4,
    'e' : 5,
    'f' : 6,
    'g' : 7,
    'h' : 8,
    'i' : 9,
    'j' : 10,
    'k' : 11,
    'l' : 12,
    'm' : 13,
    'n' : 14,
    'o' : 15,
    'p' : 16,
    'q' : 17,
    'r' : 18,
    's' : 19,
    't' : 20,
    'u' : 21,
    'v' : 22,
    'w' : 23,
    'x' : 24,
    'y' : 25,
    'z' : 26
  };

  for(let i = 0; i < string.length; i++){
    wordSum += alphaScores[string[i]];
  }
  return wordSum
}

let testString = 'This is the test String Of wordszzzzz'
//console.log(scoreTheWord('abcd'));

console.log(highestScoringWord(testString));

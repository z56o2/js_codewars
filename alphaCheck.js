/*
const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE = /\b[a-df-z]+\b/ig;
console.log(aliceExcerpt.match(regexpWithoutE));
// expected output: Array ["and", "at"]

const imageDescription = 'This image has a resolution of 1440×900 pixels.';
const regexpSize = /([0-9]+)×([0-9]+)/;
const match = imageDescription.match(regexpSize);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`);
// expected output: "Width: 1440 / Height: 900."
*/

const arr = ['this', 1234, '!!!', 'word', 'number!!'];
const inAlpha = /[a-zA-Z]/

//Find the alphabetic elements

const word = 'Word!';
const word2 = 'Word';
const lastChar = word[word.length - 1]

console.log(word);
console.log(lastChar);

console.log(inAlpha.test(lastChar));
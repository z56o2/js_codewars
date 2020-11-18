function getDomain(url) {
  //.split the string
  //work from the back and while pop() chars until you hit the first `.`
  //pop() the `.` then while pop() chars until you hit the first `/`, rename these chars and .push them to an array
  //reverse the array in place
  //while shift() chars off the front until you hit another period, shift this last period

  let stringArr = url.split('');

  while(stringArr[stringArr.length - 1] !== '.'){
    stringArr.pop();
  }
  stringArr.pop();

  if(stringArr.indexOf('.') > -1){
    stringArr.reverse();
    while(stringArr[stringArr.length - 1] !== '.'){
      stringArr.pop();
    }
    stringArr.pop();
    return stringArr.reverse().join('');
  } else {
    stringArr.reverse();
    while(stringArr[stringArr.length - 1] !== '/'){
      stringArr.pop();
    }
    stringArr.pop();
    stringArr.pop();
    return stringArr.reverse().join('');
  }
  
}

let Input1 = "http://github.com/carbonfive/raygun  " //Output1: "github"

let Input2 = "http://www.zombie-bites.com  " //Output2: "zombie-bites"

let Input3 = "https://www.cnet.com  " //Output3: "cnet"

let Input4 = 'https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en'

let Input5 = 'https://www.youtube.com/watch?v=dj81rQq0Bto'

let Input6 = 'http://google.co.jp'

console.log(getDomain(Input1));
console.log(getDomain(Input2));
console.log(getDomain(Input3));
console.log(getDomain(Input4));
console.log(getDomain(Input5));
console.log(getDomain(Input6));
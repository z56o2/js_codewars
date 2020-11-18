  //generateSampleView will take this array as its parameter, and return an array of strings
  //If the value of the id property is odd, add the user's email to the return array
  //If the value of the id property is even, your function should create a new string 
  //for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array 

function generateSampleView(users){
  //declare returnArray = []
 //loop through all objects in the array and check id property for odd or even
 //if odd, .push the email to the return array
 //if even, .push the address properties as a concatenated string to return array

 var returnArray = [];
 var address = {};

 for(var i = 0; i < users.length; i++){
  if(users[i].id % 2 === 1){
    returnArray.push(users[i].email)
   } else {
     address = users[i].address;
     returnArray.push(address.street + ', ' + address.suite + ', ' + address.city + ', ' + address.zipcode)
   }
 }
 return returnArray
}

function assertArraysEqual(actual, expected, testName){
  //compares two arrays of strings and logs 'passed' or 'failed...'
  //use simple for loop to check each value of actual and expected match
  //if non matchingi elements are found while looping, log failed and break from loop

  for(var i = 0; i < expected.length; i++){
    if(expected[i] !== actual[i]){
      console.log('FAILED [' + testName + ']\n\nactual: ' + actual + '\nexpect: ' + expected);
      return;
    }
  }
  console.log('passed');
}

var users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];

var output = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771", 'Sincere'];

//console.log(generateSampleView(users));

assertArraysEqual(generateSampleView(users), output, 'basic test with example inputs')
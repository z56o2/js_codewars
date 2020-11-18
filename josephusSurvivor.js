function josephusSurvivor(n,k){

  let arr = [0];
  while(arr.length <= n){
    arr.push(arr[arr.length - 1] + 1);
  }
  arr.shift();

  let count = 1;
  let rounds = 1;

  while(arr.length > 1){
    for(let i = 0; i < arr.length; i++){
      if(arr.length === 1){break;};
      if(count % k === 0){
        arr.splice(i,1);
        i -= 1;
      }
      count += 1;
    }
    rounds += 1;
  }
  console.log(rounds);
  return arr
}

//found this one, works very very fast
function josephusSurvivor2(n,k){
  let r = 0;
  for( var i=1; i<=n; i++ ){
    r=(r+k)%i;
    console.log(r);
  }
  return r+1
}

//1,2,3,4,5,6,7



console.log(josephusSurvivor(7,3));



console.log(josephusSurvivor(100000,2));
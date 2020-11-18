function formatDuration (seconds) {
  // Complete this function
  let years = Math.floor(seconds / 31536000);
  let days = Math.floor((seconds - (years * 31536000)) / 86400);
  let hours = Math.floor((seconds - ((years * 31536000) + (days * 86400))) / 3600);
  let minutes = Math.floor((seconds - ((years * 31536000) + (days * 86400) + (hours * 3600))) / 60);
  let secs = (seconds - ((years * 31536000) + (days * 86400) + (hours * 3600) + (minutes * 60))) % 60;

  console.log('years: ' + years);
  console.log('days: ' + days);
  console.log('hours: ' + hours);
  console.log('minutes: ' + minutes);
  console.log('seconds: ' + secs);

  let str = '';

  if(years){
    str += String(years) + (years > 1 ? ' years' : 'year');
  }
  if(str && days){
    str = str + (hours || minutes || secs ? ', ' : ', and ') + String(days) + (days > 1 ? ' days' : ' day');
  } else if(days){
    str += String(days) + (days > 1 ? ' days' : ' day');
  }
  if(str && hours){
    str = str + (minutes || seconds ? ', ' : ', and ') + String(hours) + (hours > 1 ? ' hours' : ' hour');
   }else if(hours){
     str += String(hours) + (hours > 1 ? ' hours' : ' hour');
   }
  if(str && minutes){
    str = str + (secs ? ', ' : ', and ') + String(minutes) + (minutes > 1 ? ' minutes' : ' minute');
  } else if(minutes){
    str += String(minutes) + (minutes > 1 ? ' minutes' : ' minute');
  }
  if(str && secs){
    str = str + ', and ' + String(secs) + (secs > 1 ? ' seconds' : ' second');
  } else if(secs){
    str += String(secs) + (secs > 1 ? ' seconds' : ' second');
  }

  return str


  
}


console.log(formatDuration(3662)) //, "1 hour, 1 minute and 2 seconds")


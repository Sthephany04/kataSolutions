// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = cadena => {
  let newDate = '';
  for (let i = 0; i < cadena.length; i++){
    newDate += (cadena.charAt(i) < 5) ? '0' : '1'; 
  }
  return newDate;
} 
// Solve("*'&ABCDabcde12345") = [4,5,5,3]. --the order is: uppercase letters, lowercase, numbers and special characters.

const solve = word => {
  let array = [];  
  let uppercase = 0;
  let lowercase = 0;
  let numbers = 0;
  let special = 0;   
  for (let i = 0; i < word.length; i++) {
    numbers += (/^[0-9]$/.test(word[i])) ? 1 : 0;
    uppercase += (/^[A-Z]$/.test(word[i])) ? 1 : 0;
    lowercase += (/^[a-z]$/.test(word[i])) ? 1 : 0;
    special += (/^\W$/.test(word[i])) ? 1 : 0;
  }
  array.push(uppercase, lowercase, numbers, special);  
  return array;
}
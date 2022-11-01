/*
input (string)
output (boolean)
constraints:  The string is at least one character long and shorter then 10000
from what I can gather also there are no spaces inbetween
Create an empty array
Go through the inputString backwards
Push each letter into an array
Use an array method to make it a string (join)
Compare that string to the inputString, then return a boolean
*/

function checkPalindrome(inputString) {
  const backwardsString = [];
  for (let i = inputString.length - 1; i >= 0; i--) {
    backwardsString.push(inputString[i]);
  }
  if (inputString === backwardsString.join('')) {
    return true;
  } else {
    return false;
  }
}

console.log('the value of racecar in the checkPalindrome function is: ', checkPalindrome('racecar'));
console.log('the value of chicken in the checkPalindrome function is: ', checkPalindrome('chicken'));

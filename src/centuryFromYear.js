/*
 There are two constraints, year will be above 1 and below 2005, so it has to be a positive number
 input (year)
 output (integer)
 Just the number of century it is in.

 take the given year, and divide it by 100.
 Check if that number is an integer
 If it is return that number
 If it is not round down the number and add one, then return it.
 */

function centuryFromYear(year) {
  let century = year;
  century = century / 100;
  if (Number.isInteger(century) === true) {
    return century;
  } else {
    century = Math.floor(century) + 1;
    return century;
  }
}

console.log('The century of the year 1905 is: ', centuryFromYear(1905));

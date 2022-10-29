//Code Signal practice

//Add function
function add(param1, param2) {
  return param1 + param2;
}
console.log('2+1 is: ',add(1,2));

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

console.log('The century of the year 1905 is: ' ,centuryFromYear(1905));

/*
Create a function that loops through an array, and returns the largest product that the array can produce from the adjacent element
Two guranteed constraints, the array is greater then 2 and less then 10, and the number is greater then -1000 and less then 1000
input (array) [3,6,-2,-5,7,3]
output (integer) [21]
Declare a largest number variable to hold the product, assign it a value lower then the constraints of the algorithm(-1000).
Loop through the array
If the product of the adjacent element is greater then the largest number,
assign the largest number that product.
Continue to compare the two numbers until you reach the end of the array, then return the largestNumber variable
*/
function adjacentElementsProduct(inputArray) {
  let largestNumber = -1001;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] >= largestNumber && inputArray[i + 1] !== undefined) {
      largestNumber = inputArray[i] * inputArray[i + 1];
    }
  }
  return largestNumber;
}
const adjacentTestArray = [-2, 3, 5,1];
console.log('The largest product in this array is: ', adjacentElementsProduct(adjacentTestArray));

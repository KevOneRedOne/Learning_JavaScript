/*
test
const arg1 = 'Hello';
const arg2 = 'There';
console.log(arg1.concat(arg2));

const array1 = ['A',2, 4, 5, 'ae'];
const array2 = ['B',2,5,'ER'];
console.log(array1.toString() + array2.toString())
*/

//First Method
// concat() allows to concatenate elements

//function concatStr allows to concatenate 2 arguments
// const concatStr = (arg1, arg2) => console.log(arg1.concat(arg2));

//Second Method
// toString() method joins the array and returns one string containing each array element separated by commas.

//function concatStr allows to concatenate 2 arguments
const concatStr = (arg1, arg2) => arg1.toString() + arg2.toString();


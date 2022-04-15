// let number = -1

// isPositive is a function that takes a number as parameter and return true if the given number is stricly positive, or false otherwise
const isPositive = (number) => (number > 0 ? true : false);


// abs function takes one number argument and returns its absolute value.
function abs(number) {
    if (isPositive(number)) {
        return number
    } else if (number == 0) {
        return 0
    }
    return isPositive(number) ? number : -number 
}

// console.log(isPositive(number))
// console.log(abs(number))
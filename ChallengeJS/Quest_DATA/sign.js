// function that takes one number argument and return 1 if the number is positive, -1 if the number is negative and 0 if the number is exactly 0
function sign(number) {
    if (number > 0) {
        return 1
    } else if (number < 0) {
        return -1
    } else if (number == 0) {
        return 0
    }
};

//sameSign is a function that takes 2 numbers as arguments and return true if they both have the same sign, or false otherwise.
const sameSign = (num1, num2) => (sign(num1) === sign(num2) ? true : false);

// console.log(sameSign(-1,-2))

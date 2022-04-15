/* letterSpaceNumber is a function that receives a string and returns an array 
with every instance of a letter, followed by a space, followed by a number only if 
that number has only one digit and is not followed by any letter.*/

// function letterSpaceNumber(arguments) {
//     let arr = []
//     // let myRegEx = /.\s\d((?=\W)|$)/g
//     let myRegEx = /\w\s\d\b/g
//     let find = arguments.match(myRegEx)
    
//     if (find !== null) {
//         return find
//     }
//     return arr

// }

// ou

// const letterSpaceNumber = (arguments) => {
//     let find = arguments.match(/\w\s(\b\d{1}\b)/g)

//     return find == null ? [] : find
// }

// ou

// const letterSpaceNumber = (arguments) => {
//     return arguments.match(/\w\s\d\b/g) == null ? [] : arguments.match(/\w\s\d\b/g)
// }

// ou

function letterSpaceNumber(string) {
    return string.match(/\w\s\d\b/g) == null ? [] : string.match(/\w\s\d\b/g)
    
}

console.log(letterSpaceNumber(''))  /*[]*/
console.log(letterSpaceNumber('Definitely 9.'))   /*['y 9']*/
console.log(letterSpaceNumber("It's 20 past 3"))  /*['t 3']*/
console.log(letterSpaceNumber('example 1, example 2')) /*['e 1', 'e 2']*/

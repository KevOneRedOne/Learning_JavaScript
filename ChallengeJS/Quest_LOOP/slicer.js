// slice is a function that works like array.slice or string.slice, returns a shallow copy of a portion of an array into a new array object selected from start to end. 
function slice(params, begin, end) {
    // Condition to check if the variable end isn't definied
    if (end === undefined){
        end = params.length
        // Condition to check if the value "end" exceeds the lenght of params
    } else if (end > params.length) {
        end = params.length
        // Condition to check if the value "end" is less than 0
    } else if (end < 0) {
        end += params.length
    }

   // Condition to check if the variable begin isn't definied
    if (begin === undefined) {
        begin = params.length
        // Condition to check if the value "begin" exceeds the lenght of params
    } else if (begin > params.length){
        begin = params.length
        // Condition to check if the value "begin" is less than 0
    } else if (begin < 0) {
        begin += params.length
    }

    // Condition to check if params is an array by the build function "Array.isArray()"
    if (Array.isArray(params)){
        //  we create an empty new Array
        let NewArray = []
        //browses the array that start at the variable "begin" and end at the variable "end"
        for (let i = begin ; i < end; i++){
            //push allows to append new element into an array
           NewArray.push(params[i])
        }
        return NewArray
        
    } else { //if the params is a string
        // create an empty string
        let NewString = ""
        
        for (let i = begin ; i < end; i++){
            NewString += params[i]
        }
        return NewString
    }

     
}


// const params = ['tata', 'toto', 'pipo', 'coco', 'pablo'];
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(slice(['tata', 'toto', 'pipo', 'coco', 'pablo'], 1, 6))
console.log(slice('Bonjour', 0, 7))
console.log(slice('Bonjour', 1))
console.log(slice('Bonjour', -3, -1))
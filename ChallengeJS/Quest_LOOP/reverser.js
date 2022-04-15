//reverse is a function that works on arrays and strings, and allows to reverse the elements.
function reverse(params) {
    //Condition to check if the value params is an array 
    if (Array.isArray(params)){
        let arr = []

        for (let index = params.length - 1 ; index >= 0; index--) {
            arr.push(params[index]) 
        }
        return arr
        //If params isn't an array but a string
    } else {
        let str = ""

        for (let index = params.length - 1 ; index >= 0; index--) {
            str += params[index]
            
        }
        return str
    }
}

console.log(reverse([1, 2, 3, 4, 'toto']))
console.log(reverse('Bonjour comment ça va ?'))
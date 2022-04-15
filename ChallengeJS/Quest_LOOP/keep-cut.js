//cutFirst is a function that takes a string and remove the 2 first characters.
function cutFirst(params) {
    let cutstr = ""

    for (let index = 2 ; index < params.length; index++){
        cutstr += params[index]
    } 
    return cutstr     
    
}

//cutLast is a function that takes a string and remove the 2 last characters.
function cutLast(params) {
    let cutstr = ""
    
    for (let index = 0 ; index < params.length - 2; index++){
        cutstr += params[index]
    } 
    
    return cutstr   
}

//cutFirstLast is a function that takes a string as parameter and remove the 2 first characters and 2 last characters.
const cutFirstLast = (params) => cutFirst(cutLast(params));

//keepFirst is a function that takes a string as parameter and return the string only keeping the 2 first characters.
function keepFirst(params) {
    return params.slice(0,2)
}

//keepLast is a function that takes a string as parameter and return the string only keeping the 2 last characters.
function keepLast(params) {
    return params.slice(-2)
}

//keepFirstLast is a function that takes a string as parameter and only keep 2 first characters and 2 last characters.
function keepFirstLast(params) {
    let keepFL = keepFirst(params) //Uses of the keepFirst function
    params = cutFirst(params) //Uses of the cutFirst function
    keepFL += keepLast(params) //Uses of the keepLast function
    return keepFL
}


console.log(cutFirst('Hello There'))
console.log(cutLast('Hello There'))
console.log(cutFirstLast('Hello There'))
console.log(keepFirst('Hello'))
console.log(keepLast('Hello There'))
console.log(keepFirstLast('abc'))
console.log(keepFirstLast('yoabcyo'))
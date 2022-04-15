//chunk fonction returns an array of elements split into groups the length of the given size.
function chunk(arr, size) {
    let sizetab = size
    
    if (size > sizetab) {
        return arr
    } else {
        let newtab = []
        let tab = []

    }
    
    

    return arr
}

console.log(chunk(['a', 'b', 'c', 'd'], 2))  // -->[['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3))  // -->[['a', 'b', 'c'], ['d']]
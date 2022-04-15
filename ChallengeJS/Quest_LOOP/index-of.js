//indexOf is a function that returns the index of the first occurence of a value
 function indexOf(arr,value,fromIndex) {
    //fromIndex is the argument that allows us to begin searching in the array from a specific index.
    //value is a search argument
 
    if (fromIndex === undefined){
        for (let i = 0; i < arr.length; i++) {
            if (value === arr[i]){
                return i;
            }
        }
        return -1;
    }

    for (let i = fromIndex; i < arr.length; i++){
        if (value === arr[i]) {
            return i;
        }
    } 
    return -1   
}
// console.log(indexOf(['ant', 'tata', 'yanis', 'tata', 'yanis','ant'],'ant',1))
// console.log(indexOf(['ant', 'tata', 'yanis', 'tata', 'yanis','ant'],'patate',1))
// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1],3,3))
console.log(indexOf(['t',0,0,'t'],'t',1))

//lastIndexOf is a function that returns the index of the last occurence of a value
function lastIndexOf(arr, value, fromIndex) {
    //fromIndex is the argument that allows us to begin searching in the array from a specific index.
    //value is a search argument
 
    if (fromIndex === undefined){
        for (let i = arr.length-1; i >= 0; i--) {
            if (value == arr[i]){
                return i;
            }
        }
        return -1;
    }
    for (let i = fromIndex; i >= 0; i--){
        if (value == arr[i]) {
            return i;
        }
    } 
    return -1   
}
// console.log(lastIndexOf(['ant', 'tata', 'yanis', 'tata', 'yanis','ant'],'yanis',))

//includes is a function that returns true if the value was found in the array
function includes(arr, value) {
    if (indexOf(arr, value) === -1) {
        return false;  
    } 
    return true;
}
// console.log(includes(['ant', 'tata', 'yanis', 'tata', 'yanis','ant'],'patate'))
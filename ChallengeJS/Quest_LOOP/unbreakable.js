//.split() is a method which divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
//split is a function that works like the .split but take the string as it's first argument.
function split(char, selector) {
    let arr = [];
    let str = "";
  
    for (let index = 0; index < char.length; index++) {
      if (char.slice(index, index + selector.length) == selector) {
        arr.push(str)
        index = index + selector.length -1
        str = ''
      } else {
        str += char[index];
      }
    }
    arr.push(str)
    return arr
}

console.log(split('a,b,c', ',')); // ['a', 'b', 'c']
console.log(split("a b c", " ")); // ['a', 'b', 'c']
console.log(split("abc-efg-hij", "-")); // ['abc', 'efg', 'hij']

//.join() is a method that creates and returns a new string by concatening elements and separing them by a specified separator
//join is a function that works like the .join but take the array as it's first argument.
function join(arr, separator) {
    let str = "";

    for (let index = 0; index < arr.length; index++) {
        //complete the value str by the index
        str += arr[index];
        //When the index isn't at the end of the array
        if (index != arr.length - 1) {
            str += separator; //add the separator
        } else {
            //When the index is at the end of the array
            str += ""; // add nothing
        }
        // or an other syntaxe with TernaryOperator:
        // str += arr[index] + (index != arr.length - 1 ? separator : '')
    }
    return str;
}

// console.log(join(['ee', 'ff', 'gg', 'b'], ',')) // "ee,ff,gg"
// console.log(join(['eeg', 'fff', 'ggh', 'yy'], '-')) // "eeg-fff-ggh-yy"
// console.log(join(['eeg', 'fff', 'ggh', 'yy'], ' ')) // "eeg fff ggh yy"

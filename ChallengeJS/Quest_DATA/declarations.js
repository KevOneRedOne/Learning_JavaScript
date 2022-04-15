//declaration of a string
let escapeStr = '`\\/"\'';
let arr = [4, '2'] ;
// declaration of a constant containing several values
const obj = {
    str : 'Hello there ! Piscine-Js !',
    num : 14 ,
    bool : true,
    undef : undefined,
};

const nested = {
    //creation of an array with an undefined value inside 
    arr : [4,undefined,'2'],
    //creation of an object
    obj : {
        str : 'This is an object',
        num : 44,
        bool : false,
    },
};
// Object.freeze() ignores the value modification to an object.
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.obj) //we have to freeze the arr and obj of nested
Object.freeze(nested.arr)

console.log(escapeStr);
console.log(arr);
console.log(obj);
console.log(nested);
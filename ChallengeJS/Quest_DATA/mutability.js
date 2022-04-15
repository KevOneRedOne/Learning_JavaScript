// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
// };

// Way to copy an object in js, the spread ...
let clone1 = {
    ... person
};
// An other way to copy an object, th assign method
let clone2 = Object.assign({}, person);

// Copy the value person into samePerson
let samePerson = person;

//add attribute into the object
person.age += 1;
person.country = 'FR';


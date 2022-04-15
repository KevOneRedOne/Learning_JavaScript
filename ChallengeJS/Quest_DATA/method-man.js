//words() is a function that takes a string and split it into an array of strings on spaces
function words(params) {
    return params.split(" ");
};

//sentence() is function that takes an array of strings and join them with spaces yell that take a string and return it in upper case
function sentence(params) {
    return params.join(" ");
};

// yell() take a string and return it in upper case
function yell(params) {
    return params.toUpperCase();
};
// whisper() take a string and return it in lower case and surround it with *
function whisper(params) {
    return "*" + params.toLowerCase() + "*";
};
//capitalize is a function that takes a string and transforms it to upper case only for the first letter, and in lowercase for the rest of the string
function capitalize(params){
    // return yell(params[0]) + params.toLowerCase(params);
    return yell(params[0]) + params.slice(1).toLowerCase();
};



// Test
// const params = 'helloworld';
// console.log(capitalize(params))

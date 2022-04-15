//repeat is a function that takes a string an a number, and return the repeated string by the number
function repeat (str, nb) {
    let repeat_str = ""
    //count the characters of th str by a counter i < nb ; 
    for (let i = 0 ; i < nb; i++) {
        repeat_str = str + repeat_str;
    }
    return repeat_str;

}

// console.log(repeat("coucou",5));
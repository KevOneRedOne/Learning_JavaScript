// nasa is a function that takes a number N as a parameter and returns a string with all numbers from 1 to the N separated by whitespace, with three exceptions
function nasa(nbr) {
    const result = []

    for (let i = 1; i <= nbr; i++) {
        
        if (i % 5 == 0 && i % 3 == 0){ //For the number that are divisible by 3 and 5 add 'NASA'.
            result.push("NASA")
        } else if (i % 5 == 0) { //For numbers divisible by 5, add 'SA'.
            result.push("SA")
        } else if (i % 3 == 0) { // For numbers divisible by 3, add 'NA'.
            result.push("NA")
        } else {
            result.push(i)
        }
    }
    return result.join(' ')
}

console.log(nasa(15))
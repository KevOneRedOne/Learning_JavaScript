// round is a function that works like The Math.round() function which returns the value of a number rounded to the nearest integer.
function round(number) {
    let num_round = number % 1

    if (num_round == 0) {
        return number
    }
    else if (num_round >= 0.5) {
        return number - num_round + 1
    }
    else if (num_round > 0 && num_round < 0.5) {
        return number - num_round
        }
    else if (num_round < 0 && num_round > -0.5) {
        return number - num_round
    }
    else {
        return number - num_round - 1
    }
}

// ceil is a function that works like The Math.ceil() function which always rounds a number up to the next largest integer.
function ceil(number) {
    let num_round = number % 1;
    
    if (num_round == 0) {
        
        return num_round

    } else if (num_round > 0) {

        return number - num_round + 1

    } else {
        
        return number - num_round
    }
}

// floor is a function that works like The Math.floor() function which returns the largest integer less than or equal to a given number.
function floor(number) {
    let num_round = number % 1;
    
    if (num_round == 0) {
        
        return num_round

    } else if (num_round > 0) {

        return number - num_round 

    } else {
        
        return number - num_round - 1
    }
}

// trunc is a function that works like The Math.trunc() function which returns the integer part of a number by removing any fractional digits.
function trunc(number){
    let num_round = number % 1
    
    return number - num_round

}
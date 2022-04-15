// ionOut is a function that receives a string and returns an array with every word containing 'ion' following a t, without the 'ion'.
function ionOut(str) {
    let regEx = /([a-z]*t(?=(ion)))/g
    let arr = []

    if (str.match(regEx) !==null) {
        return str.match(regEx);
    }
    return arr
}

console.log(ionOut('attention, direction')) /*['attent', 'direct']*/
console.log(ionOut('promotion, provision')) /*['promot']*/
console.log(ionOut('transfusion')) /* [] */
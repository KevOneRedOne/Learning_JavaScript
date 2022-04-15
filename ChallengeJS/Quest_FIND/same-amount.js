// sameAmount is a function that takes thee parameter, a data string and 2regexes.
// The objective is to confirm that the second and the third parameter matched the same amount of times in the first parameter.

function sameAmount (data, RegEx1, RegEx2) {

  let arr1 = []
  let arr2 = []

  arr1 = data.match(new RegExp(RegEx1, "g"))
  arr2 = data.match(new RegExp(RegEx2, "g"))
  if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
    return false;
  }
  if (arr1.length === arr2.length) {
    return true;
  }
  return false;
  
}

// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
// ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

// console.log(sameAmount('hello how are you', /l/, /e/)) 
// console.log(sameAmount('hello how are you', /h/, /e/))
// console.log(sameAmount('hello how are you', /he/, /ho/))
// console.log(sameAmount(data, /i/, /p/))
// console.log(!sameAmount(data, /h/, /w/))
// console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
// console.log(!sameAmount(data, /q /, /qqqqqqq/))
// console.log(sameAmount(data, /fs[^q]/, /q /))
// console.log(sameAmount(data, /^[qs]/, /^[gq]/))
// console.log(sameAmount(data, /j/, /w/))
// console.log(!sameAmount(data, /j/, / /))
// console.log(sameAmount(data, /fs./, /jn./))


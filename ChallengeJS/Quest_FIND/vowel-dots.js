// vowelDots is a function that receives a string and adds a . after every vowel 
// ('y' is not considered a vowel here) using a regex called vowels.
const vowels = /[AEIOU|aeiou]/g

function vowelDots(args) {
    let find = args.match(vowels)

    if (find == null) {
        return args
    }
    for (let i = 0 ; i < find.length; i++) {
        args = args.replace(find[i], find[i]+".")
    }
    return args
    
}

console.log(vowelDots('something')) /*'so.me.thi.ng'*/
console.log(vowelDots('')) // ''
console.log(vowelDots('rhythm')) //'rhythm'
console.log(vowelDots('Algorithm')) /*A.lgo.ri.thm*/
// getArchitects is a function which returs an array containing 2 arrays of HTML elements
export function getArchitects() {
    let arr = []
    // the first array contains the architects, all corresponding to a <a> tag
    arr.push(Array.from(document.getElementsByTagName('a'))) //for the tag 'a' from data
    // the second array contains all the non-architects people
    arr.push(Array.from(document.getElementsByTagName('span'))) // for the tag 'span' from data
    return arr
};

// getClassical is a function which returs an array containing 2 arrays of HTML elements:
export function getClassical() {
    let arr = []
    // the first array contains the architects belonging to the classical class
    arr.push(Array.from(document.getElementsByClassName('classical')))
    // the second array contains the non-classical architects
    arr.push(Array.from(document.querySelectorAll('a:not(.classical)')))
    return arr
};

// getActive is a function which returs an array containing 2 arrays of HTML elements:
export function getActive() {
    let arr = []
    // the first array contains the classical architects who are active in their class
    arr.push(Array.from(document.getElementsByClassName('active')))
    // the second array contains the non-active classical architects
    arr.push(Array.from(document.querySelectorAll('a.classical:not(.active)')))
    return arr
};

// getBonnannoPisano is a function which returs an array containing 2 arrays of HTML elements:
export function getBonannoPisano() {
    let arr = []
    // the HTML element of the architect you're looking for, whose id is BonannoPisano
    arr.push(document.getElementById("BonannoPisano"))
    // an array which contains all the remaining HTML elements of active classical architects
    arr.push(Array.from(document.querySelectorAll('a.classical.active:not(BonannoPisano)')))
    // arr.push(Array.from(document.getElementById('id:not(BonannoPisano)')))
    return arr
};

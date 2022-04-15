// dayOfTheYear function takes a date an returns the number of days since the first day 
function dayOfTheYear(date) {
    let now = new Date();
    let days = 1;
    let year = date.getFullYear();
    now.setFullYear(year, 0, days)

    while (date > now) {
        days++
        now.setDate(now.getDate()+1)
    }
    return days

}


console.log(dayOfTheYear(new Date('0001-01-01'))) /*1*/
console.log(dayOfTheYear(new Date('1664-08-09'))) /*222*/
console.log(dayOfTheYear(new Date('1600-12-31'))) /*366*/
console.log(dayOfTheYear(new Date('2020-06-22')))  /*174*/
console.log(dayOfTheYear(new Date('2048-12-08')))  /*343*/
console.log(dayOfTheYear(new Date('2048-11-08')))  /*313*/
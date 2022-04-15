//dogYears() is a function that if given a planet name and an age in seconds, calculates how old a dog would be on the given planet.
function dogYears(namePlanet, age) {
    let dogSecond ;
    // 1 human year is 7 years for the dog  
    const planets = {
        earth : 1 ,
        mercury : 0.2408467, 
        venus : 0.61519726,
        mars : 1.8808158,
        jupiter : 11.862615,
        saturn : 29.447498,
        uranus : 84.016846,
        neptune : 164.79132,
    };
    
    dogSecond = (7 * age) / (31557600 * planets[namePlanet]);
    return parseFloat(dogSecond.toFixed(2))
}

// Other Method

// let orbitalYears;
/*
if (namePlanet = 'earth') {
    orbitalYears = 1 ;
    //31 557 600s
} else if (namePlanet = 'mercury') {
    orbitalYears = 0.2408467 ;
} else if (namePlanet = 'venus') {
    orbitalYears = 0.61519726 ;
} else if (namePlanet = 'mars') {
    orbitalYears = 1.8808158 ;
} else if (namePlanet = 'jupiter') {
    orbitalYears = 11.862615 ;
} else if (namePlanet = 'saturn') {
    orbitalYears = 29.447498 ;
} else if (namePlanet = 'uranus') {
    orbitalYears = 84.016846 ;
} else if(namePlanet = 'neptune') {
    orbitalYears = 164.79132 ;
}
*/
// dogSecond = (7 * age) / (31557600 * orbitalYears);
// return parseFloat(dogSecond.toFixed(2))
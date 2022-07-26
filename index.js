// Code your solution here
function findMatching(drivers, driver){
    return drivers.filter(possibleMatch => possibleMatch.toUpperCase() === driver.toUpperCase())
} 
function fuzzyMatch(drivers, namesWithSa){
    return drivers.filter(matchWithSa => matchWithSa[0,1] === namesWithSa[0,1])
}
let drivers = ['Bobby', 'Sammy', 'Stephanie','Sally', 'Annette', 'Sarah', 'bobby'];
let namesWithSa = "Sa"
console.log(fuzzyMatch(drivers, namesWithSa))

function matchName(drivers, driver){
    return drivers.filter(driverMatch => driverMatch.name === driver)
}



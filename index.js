// Code your solution in this file
function findMatching(drivers, name){
    let matching;
    matching = drivers.filter(function (driver) {return driver.toUpperCase() === name.toUpperCase()})
    return matching;
}

function fuzzyMatch(drivers, letters){
    let matching;
    matching = drivers.filter(function (driver) {
        return driver.slice(0, letters.length).toUpperCase() === letters.toUpperCase()
    })
    return matching;
}

function matchName(drivers, nameArg){
    let matching;
    matching = drivers.filter(function (driver){
        return driver.name.toUpperCase() === nameArg.toUpperCase();
    })
    return matching;
}

// Code your solution in this file
function findMatching(drivers, name){
        return drivers.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, name){
    return drivers.filter(function(driver){ 
    return  driver.startsWith(name[0])})
}

function matchName(drivers, string){
    return drivers.filter(function(driver){
    return driver['name'] === string
    })
}
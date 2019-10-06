function findMatching(drivers, name){
    return drivers.filter(item => item.toLowerCase() == name.toLowerCase());
}

function fuzzyMatch(drivers, name){
    return drivers.filter(item => item[0] == name[0]) 
}

function matchName(drivers, name){
    return drivers.filter(item => item.name == name)
}
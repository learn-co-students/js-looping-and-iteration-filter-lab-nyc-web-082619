function findMatching(arr,name) {
return arr.filter(function(item) { return item.toUpperCase() === name.toUpperCase();});
}

function fuzzyMatch(drivers,letter) {
  return drivers.filter(function(driverName) {return driverName.toUpperCase().startsWith(letter.toUpperCase())});
}

function matchName(drivers, name) {
  return drivers.filter(function(driver){ return driver.name.toUpperCase() === name.toUpperCase()})
}
test = ['ath', 'asd', 'bta', 'afd']

function findMatching(drivers, string) {
    return drivers.filter(function (n) { return n.toLowerCase() === string.toLowerCase(); })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( function (n) { return n.slice(0,string.length) === string;})
}


function matchName(drivers, string) {
    return drivers.filter( function (n) {return n.name === string; });
}


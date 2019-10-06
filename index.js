function findMatching(list, name) {
    return list.filter(item => item.toLowerCase() == name.toLowerCase());
}
 function fuzzyMatch(list, name) {
     return list.filter(item => item[0] == name[0] )
 }

 function matchName(list, name){
    return list.filter(item => item.name == name);
 }
// Code your solution here
function findMatching(array,string) {
    const matchFind = array.filter(function (name) {
        return name.toLowerCase() === string.toLowerCase()
    })
    return matchFind;
};

function fuzzyMatch(array, string) {
    const fuzzyFind = array.filter(function (letters) {
        return letters[0] === string[0]
    });
    return fuzzyFind;
};

function matchName(array,string) {
    const nameMatch = array.filter(function (obj) {
        return obj.name === string
    });
        return nameMatch;
};
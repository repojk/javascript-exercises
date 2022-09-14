const removeFromArray = function(arrayInitial, ...numsRemove) {
    let result = arguments[0];
    for (let i = 0; i < numsRemove.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (numsRemove[i] === result[j]) {
                result.splice(j,1);
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

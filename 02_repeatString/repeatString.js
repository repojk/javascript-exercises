const repeatString = function(stringInput, numRepeat) {
    if (numRepeat < 0) {
        return "ERROR"
    }
    
    let result = ""
    for (let i = 0; i < numRepeat; i++) {
        result += stringInput;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

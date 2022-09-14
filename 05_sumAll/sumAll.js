const sumAll = function(...args) {
    for (let arg of args) {
        if (typeof arg !== "number") {
            return "ERROR";
        }
        if (arg < 0) {
            return "ERROR";
        }
    }

    let argSmall = 0;
    let argLarge = 0;
    if (args[0] < args[1]) {
        argSmall = args[0];
        argLarge = args[1];
    }
    else {
        argSmall = args[1];
        argLarge = args[0];
    }
    
    let result = 0;
    for (let i = argSmall; i < (argLarge + 1); i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;

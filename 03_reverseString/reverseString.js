const reverseString = function(word) {
    // convert to array to reverse
    let result = word.split("");
    result = result.reverse();
    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;

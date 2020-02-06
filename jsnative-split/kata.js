const split = function(str, separator) {
    let words = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == separator) {
            words.push(word);
            word = "";
        } else {
            word += str[i];
        }
    }
    words.push(word);
    return words;
};

String.prototype.mySplit = function(separator) {
    return split(this, separator);
};


module.exports = split;

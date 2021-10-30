// Regular Expression
function isCharacterALetter(char) {
    // only the upper case
    return (/[A-Z]/).test(char)
    // only the lower case
    return (/[a-z]/).test(char)
    // both
    return (/[a-zA-Z]/).test(char)
}

// ECMAScript Case Transformation
function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
}
function firstDigit(inputString) {
    return [...inputString].filter((e) => !isNaN(e) && e !== ' ')[0];
}
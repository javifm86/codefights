function sumUpNumbers(inputString) {
    inputString = inputString.replace(/[^0-9]/g, ' ');
    var arr = inputString.split(' ').map(Number);
    if (!arr.length) return 0;
    return arr.reduce((a, b) => a + b);
}
function messageFromBinaryCode(code) {
    for (var i = 0, result = ''; i < code.length; i = i + 8) {
        result += String.fromCharCode(parseInt(code.slice(i, i + 8), 2));
    }
    return result;
}
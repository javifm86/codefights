function longestDigitsPrefix(str) {
    var s = str.replace(/ /g, '#');
    var zeros = s.search(/(?![0])/);
    var r = parseInt(s, 10);
    return isNaN(r) ? '' : '0'.repeat(zeros) + r;
}
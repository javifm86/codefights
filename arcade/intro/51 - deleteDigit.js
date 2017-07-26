function deleteDigit(n) {
    var s = String(n);
    var max = 0;
    for (var i = 0; i < s.length; i++) {
        var num = Number(s.substr(0, i) + s.substr(i + 1, s.length));
        if (num > max) {
            max = num;
        }
    }
    return max;
}
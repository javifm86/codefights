function lineEncoding(s) {
    var result = '', last = 0;
    for (var i = 1; i < s.length; i++) {

        if (s[i] !== s[i - 1]) {
            result += (i - last) > 1 ? (i - last) + s[i - 1] : s[i - 1];
            last = i;
            if (i === s.length - 1) result += s[i];
        }
        else if (i === s.length - 1) {
            result += (i - last + 1) > 1 ? (i - last + 1) + s[i] : s[i];
        }
    }
    return result;
}
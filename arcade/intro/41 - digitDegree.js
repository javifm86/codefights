function digitDegree(n) {
    var str, count;
    var tries = 0;

    while (n > 9) {
        str = String(n);
        count = str.length;
        n = 0;
        while (count--) {
            n += parseInt(str[count], 10);
        }
        tries++;
    }
    return tries;
}
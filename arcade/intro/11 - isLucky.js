function isLucky(n) {

    var s = String(n);
    var pos = (s.length / 2);

    var first = s.substr(0, pos);
    var last = s.substr(pos);
    var sumFirst = 0;
    var sumLast = 0;

    for (var i = 0; i < first.length; i++) {
        sumFirst += parseInt(first[i], 10);
        sumLast += parseInt(last[i], 10);
    }

    return (sumFirst === sumLast);
}
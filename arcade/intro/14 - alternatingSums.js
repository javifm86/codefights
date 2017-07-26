function alternatingSums(a) {

    var sum1 = 0;
    var sum2 = 0;
    var result = [];

    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            sum1 += a[i];
        }
        else {
            sum2 += a[i]
        }
    }

    result.push(sum1, sum2);
    return result;
}

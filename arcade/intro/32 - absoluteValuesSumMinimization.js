function absoluteValuesSumMinimization(a) {
    var total = process(a[0], a);
    var result = a[0];

    for (var i = 1; i < a.length; i++) {
        var aux = process(a[i], a);

        if (aux < total) {
            total = aux;
            result = a[i];
        }

    }
    return result;

    function process(num, arr) {
        return arr.reduce((prev, curr) => prev + Math.abs(curr - num), 0);
    }
}

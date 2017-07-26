function shapeArea(n) {

    var firstLine = (n * 2) - 1;
    var sumRest = 0;
    var auxLine = firstLine;

    for (var i = 0; i < n - 1; i++) {
        auxLine = auxLine - 2;
        sumRest += auxLine;
    }

    return (sumRest * 2) + firstLine;
}
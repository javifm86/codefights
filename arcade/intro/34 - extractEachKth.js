function extractEachKth(inputArray, k) {
    var mult = 1;
    return inputArray.filter(function (elem, i) {
        if (i === ((k * mult) - 1)) {
            mult++;
            return false;
        }
        return elem;
    });
}

function adjacentElementsProduct(inputArray) {

    var len = inputArray.length;
    var result = inputArray[0] * inputArray[1];

    for (var i = 1; i < len - 1; i++) {
        var candidate = inputArray[i] * inputArray[i + 1];
        if (candidate > result) {
            result = candidate;
        }
    }

    return result;
}

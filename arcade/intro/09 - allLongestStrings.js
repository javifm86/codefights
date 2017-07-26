function allLongestStrings(inputArray) {

    if (inputArray.length < 2) {
        return inputArray;
    }

    inputArray.sort(sortString);

    for (var i = 1; i < inputArray.length; i++) {

        if (inputArray[i].length < inputArray[i - 1].length) {
            inputArray.splice(i);
            return inputArray;
        }
    }

    function sortString(a, b) {
        return b.length - a.length;
    }

}

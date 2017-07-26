function avoidObstacles(inputArray) {

    inputArray.sort(sortNumber);

    var solved = false;

    for (var i = 1; solved === false; i++) {
        solved = test(i, inputArray);
    }

    return i - 1;

    ////////////////////////////////

    function test(num, arr) {

        var i = num;
        while (i < (arr[arr.length - 1] + 1)) {
            if (arr.indexOf(i) === - 1) {
                i += num;
            }
            else {
                return false;
            }
        }
        return true;
    }

    function sortNumber(a, b) {
        return a - b;
    }

}
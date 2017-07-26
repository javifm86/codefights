function palindromeRearranging(inputString) {

    var obj = {};
    var odds = 0;

    for (var i = 0; i < inputString.length; i++) {

        if (obj[inputString[i]] == null) {
            obj[inputString[i]] = 1;
        }
        else {
            obj[inputString[i]] += 1;
        }

    }

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (obj[prop] % 2 !== 0) {
                odds++;
            }
        }
    }

    return odds < 2;
}

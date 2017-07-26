function areSimilar(a, b) {

    var count = 0;

    if (checkEqual(a.slice(0), b.slice(0))) {

        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                count++;
            }
        }
        return count < 3;
    }

    return false;

    function checkEqual(a1, b1) {

        a1.sort(sortNumber);
        b1.sort(sortNumber);

        if (a1.length !== b1.length) {
            return false;
        }

        for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== b1[i]) {
                return false;
            }
        }

        return true;
    }

    function sortNumber(a, b) {
        return a - b;
    }


}
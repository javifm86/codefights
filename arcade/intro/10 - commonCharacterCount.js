function commonCharacterCount(s1, s2) {

    var obj1 = createObject(s1.split(''));
    var obj2 = createObject(s2.split(''));

    var keys = Object.keys(obj1);
    var total = 0;

    for (var i = 0; i < keys.length; i++) {
        if (obj2[keys[i]] != null) {
            total += Math.min(obj1[keys[i]], obj2[keys[i]]);
        }
    }

    return total;

    function createObject(arr) {
        var obj = {};

        for (var x = 0; x < arr.length; x++) {
            if (obj[arr[x]] == null) {
                obj[arr[x]] = 1;
            }
            else {
                obj[arr[x]] += 1;
            }

        }

        return obj;
    }

}
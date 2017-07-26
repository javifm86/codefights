function stringsRearrangement(inputArray) {

    var cont = 0;
    var dictionaire = {};

    for (var i = 0; i < inputArray.length; i++) {

        if (dictionaire[inputArray[i]] == null) {
            dictionaire[inputArray[i]] = {
                coincidences: search(inputArray[i], i, inputArray)
            };
        }

    }

    var keysDictionaire = Object.keys(dictionaire);
    var posiblesStart = keysDictionaire.length;

    for (i = 0; i < posiblesStart; i++) {
        if (tryInit(keysDictionaire[i], dictionaire, inputArray)) {
            return true;
        }
    }

    return false;
    ////////////////////////////////////////

    function tryInit(initKey, dictionaire, inputArray) {

        var initCandidates = dictionaire[initKey].coincidences.length;
        var first = true;
        var combination = [];
        var newCombination = [];
        var notFound = true;

        for (var x = 0; x < initCandidates; x++) {
            combination.push([initKey, dictionaire[initKey].coincidences[x]]);
        }

        while (notFound) {

            if (first) {
                first = false;
            }
            else {
                if (newCombination.length) {

                    if (newCombination[0].length === inputArray.length) {
                        notFound = false;
                        return true;
                    }

                    combination = [].concat(newCombination);
                    newCombination = [];
                }
                else {
                    notFound = false;
                    return false;
                }
            }


            for (var i = 0; i < combination.length; i++) {
                var next = combination[i];
                var last = next[next.length - 1];
                var arr = [].concat(inputArray);
                var pos;

                for (var a = 0; a < next.length; a++) {
                    pos = arr.indexOf(next[a]);
                    if (pos > -1) {
                        arr.splice(pos, 1);
                    }
                }

                for (var b = 0; b < dictionaire[last].coincidences.length; b++) {
                    pos = arr.indexOf(dictionaire[last].coincidences[b]);
                    if (pos > -1) {
                        newCombination.push(combination[i].concat([dictionaire[last].coincidences[b]]));
                    }
                    else {

                    }
                }

            }

        }

        return false;

    }

    function search(elem, pos, arr) {
        var coincidences = [];
        for (var i = 0; i < arr.length; i++) {
            if (i === pos) continue;
            if (compare(elem, arr[i])) {
                coincidences.push(arr[i]);
            }
        }
        return coincidences;

    }

    function compare(elem1, elem2) {
        var errors = 0;
        for (var i = 0; i < elem1.length; i++) {
            if (elem1[i] !== elem2[i]) {
                errors++;
            }
        }
        return (errors === 1);
    }

}
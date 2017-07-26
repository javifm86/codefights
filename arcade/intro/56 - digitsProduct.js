function digitsProduct(product) {

    if (product === 1) return 1;
    if (product === 0) return 10;
    if (product < 10) return product;

    var finalResult;
    var candidates = [];

    for (var i = 2; i < 10; i++) {
        if (product % i === 0) candidates.unshift(i);
    }

    if (candidates.length === 0) {
        return -1;
    }

    for (var x = 0; x < candidates.length; x++) {
        search(candidates[x]);
    }
    if (finalResult == null) {
        return -1;
    }
    return finalResult;
    /////////////////////

    function search(init) {

        var result = [init];
        var aux = product / init;

        if (aux < 10) {
            result.push(aux);
            result.sort((a, b) => a - b);
            checkCoincidence(Number(result.join('')));
            return;
        }

        for (var i = 0; i < candidates.length; i++) {

            if ((aux % candidates[i]) === 0) {
                aux = aux / candidates[i];
                result.push(candidates[i]);
                i = 0;
            }
            if (aux < 10) {
                result.push(aux);
                result.sort((a, b) => a - b);
                checkCoincidence(Number(result.join('')));
            }

        }

        function checkCoincidence(result) {
            if (finalResult == null) {
                finalResult = result;
            }
            else if (result < finalResult) {
                finalResult = result;
            }
        }

    }

}
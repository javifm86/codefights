function fileNaming(names) {

    var result = [names[0]];

    for (var i = 1; i < names.length; i++) {
        var elem = names[i];
        if (result.indexOf(elem) > -1) {
            insert(elem);
        }
        else {
            result.push(elem);
        }

    }

    return result;
    ////////////////////////
    function insert(str) {
        var count = 1;
        while (result.indexOf(str + `(${count})`) !== -1) {
            count++;
        }
        result.push(str + `(${count})`);
    }

}
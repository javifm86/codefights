function sortByHeight(a) {

    var arrIndexs = [];
    var arr = a.filter(function (elem, index) {

        if (elem === -1) {
            arrIndexs.push(index)
        }

        return elem > -1;
    });

    arr.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < arrIndexs.length; i++) {
        arr.splice(arrIndexs[i], 0, -1);
    }

    return arr;
}

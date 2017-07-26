function makeArrayConsecutive2(statues) {

    var arrOrdered = statues.sort(sortNumber);
    var total = 0;

    for (var i = 0; i < arrOrdered.length - 1; i++) {
        total += arrOrdered[i + 1] - arrOrdered[i] - 1;
    }

    return total;

    function sortNumber(a, b) {
        return a - b;
    }

}
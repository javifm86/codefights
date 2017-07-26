function isIPv4Address(inputString) {

    var arr = inputString.split('.');

    if (arr.length !== 4) {
        return false;
    }
    return arr.filter(filterIp).length === 4;

    function filterIp(num) {
        var numConv = parseInt(num, 10);
        return (num == numConv) && (num > -1 && num < 256);
    }

}
function isMAC48Address(inputString) {
    var arr = inputString.split('-');
    var reg = new RegExp('^[A-F0-9]*$');
    return arr.length === 6 && arr.every(e => e.length === 2 && reg.test(e));
}
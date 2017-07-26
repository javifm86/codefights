function isBeautifulString(inputString) {

    var init = 'a'.charCodeAt(0);
    var end = 'z'.charCodeAt(0);
    var counter = count('a', inputString);

    for (var i = init + 1; i <= end; i++) {
        var currentCount = count(String.fromCharCode(i), inputString);
        if (currentCount > counter) {
            return false;
        }
        counter = currentCount;
    }

    return true;

    function count(char, str) {
        return (str.match(new RegExp(char, 'g')) || []).length;
    }
}
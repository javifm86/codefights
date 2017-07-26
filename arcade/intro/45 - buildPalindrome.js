function buildPalindrome(st) {

    var reversed = st.split('').reverse();
    var palindrome = st + reversed.join('');

    for (var i = 0; i < st.length; i++) {
        reversed.shift();
        var join = reversed.join('');
        var candidate = st + join;
        if (checkPalindrom(candidate)) palindrome = candidate;
    }

    return palindrome;

    function checkPalindrom(str) {
        return str === str.split('').reverse().join('');
    }

}
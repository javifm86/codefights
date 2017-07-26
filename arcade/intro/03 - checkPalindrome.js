function checkPalindrome(inputString) {
    var len = inputString.length;
    var arr = inputString.split('');
    var reversed = '';

    while( len-- ){
        reversed += arr[len];
    }
    
    return reversed === inputString;
}

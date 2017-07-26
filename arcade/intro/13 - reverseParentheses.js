function reverseParentheses(s) {

    var posIni;
    var posFinal;

    while (s.lastIndexOf('(') > -1) {
        posIni = s.lastIndexOf('(');
        var auxString = '';

        for (var i = posIni + 1; i < s.length; i++) {

            if (s[i] === ')') {
                posFinal = i;
                break;
            }
            else {
                auxString += s[i];
            }

        }

        auxString = auxString.split('').reverse().join('');
        s = s.slice(0, posIni) + auxString + s.slice(posFinal + 1);
    }

    return s;
}
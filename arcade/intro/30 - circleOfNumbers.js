function circleOfNumbers(n, firstNumber) {
    var half = n / 2;

    if (firstNumber < half) {
        return firstNumber + half;
    }
    else {
        return firstNumber - half;
    }
}
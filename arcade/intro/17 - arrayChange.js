function arrayChange(inputArray) {

    for (var c = 0, i = 0; i < inputArray.length - 1; i++) {

        var curr = inputArray[i];
        var next = inputArray[i + 1];
        if (curr >= next) {
            c += (curr - next) + 1;
            inputArray[i + 1] = curr + 1;
        }

    }

    return c;
}

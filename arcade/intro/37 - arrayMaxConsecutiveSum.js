function arrayMaxConsecutiveSum(inputArray, k) {
    var max = sum(inputArray, 0, k);
    var currentSum = max;

    for (var i = 1; i < inputArray.length - 2; i++) {
        currentSum -= inputArray[i - 1];
        currentSum += inputArray[i + k - 1];
        if (currentSum > max) max = currentSum;
    }
    return max;

    function sum(arr, begin, count) {
        var sum = 0;
        for (var i = begin; i < count + begin; i++) {
            sum += arr[i];
        }
        return sum;
    }
}
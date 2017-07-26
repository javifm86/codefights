function depositProfit(deposit, rate, threshold) {

    var times = 0;

    while (deposit < threshold) {
        deposit += deposit * (rate / 100);
        times++;
    }
    return times;
}

function almostIncreasingSequence(sequence) {

    var errors = 0;

    for (var i = 0; i < sequence.length - 1; i++) {

        var current = sequence[i];
        var next = sequence[i + 1];
        var nextNext = sequence[i + 2];
        var prev = sequence[i - 1];

        if (current >= next) {

            var isPrevGreaterNext = prev && prev >= next;
            var isCurrentGreaterNextNext = nextNext && current >= nextNext;

            if (isPrevGreaterNext && isCurrentGreaterNextNext) {
                errors += 2;
            }
            else {
                errors++;
            }

        }

    }

    return (errors < 2);
}

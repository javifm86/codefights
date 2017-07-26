function electionsWinners(votes, k) {
    votes.sort((a, b) => a - b);
    var max = votes[votes.length - 1];

    var votesFiltered = votes.filter((elem) => {
        if ((elem + k) > max) {
            return true;
        }
        return false;
    });

    if (!votesFiltered.length) {
        if (votes[votes.length - 1] === votes[votes.length - 2]) {
            return 0;
        }
        return 1;
    }
    return votesFiltered.length;
}
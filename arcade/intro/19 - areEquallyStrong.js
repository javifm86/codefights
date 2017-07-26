function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    var mine = [yourLeft, yourRight].sort(sortNumber);
    var friend = [friendsLeft, friendsRight].sort(sortNumber);

    return (mine[0] === friend[0]) && (mine[1] === friend[1]);

    function sortNumber(a, b) {
        return a - b;
    }

}

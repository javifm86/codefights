function bishopAndPawn(b, p) {
    var cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return Math.abs(cols.indexOf(b[0]) - cols.indexOf(p[0])) === Math.abs(~~b[1] - ~~p[1]);
    // Tricky use of ~~ instead of correct Number(x) or parseInt(x,10), just for fun
}
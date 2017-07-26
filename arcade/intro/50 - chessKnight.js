function chessKnight(cell) {
    var col = cell[0], row = cell[1];
    var moves = 8;
    var is1or8 = (row === '1' || row === '8');
    var is2or7 = (row === '2' || row === '7');
    if (col === 'a' || col === 'h') {
        if (is1or8) {
            moves -= 6;
        }
        else if (is2or7) {
            moves -= 5;
        }
        else {
            moves -= 4;
        }
    }
    else if (col === 'b' || col === 'g') {
        if (is1or8) {
            moves -= 5;
        }
        else if (is2or7) {
            moves -= 4;
        }
        else {
            moves -= 2;
        }
    }
    else {
        if (is1or8) {
            moves -= 4;
        }
        else if (is2or7) {
            moves -= 2;
        }
    }
    return moves;
}
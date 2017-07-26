function chessBoardCellColor(cell1, cell2) {

    return isWhite(cell1) === isWhite(cell2);

    function isWhite(coord) {
        var pairWhite = ['A', 'C', 'E', 'G'];
        var isPair = parseInt(coord[1], 10) % 2 === 0;

        if (pairWhite.indexOf(coord[0]) > -1) {
            return isPair;
        }
        return !isPair;
    }

}
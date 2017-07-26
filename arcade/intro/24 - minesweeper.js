function minesweeper(matrix) {

    var rows = matrix.length;
    var cols = matrix[0].length;
    var result = [];
    for (var i = 0; i < rows; i++) {

        var arrRow = [];

        for (var x = 0; x < cols; x++) {
            var cont = 0;
            if (matrix[i - 1]) {
                if (matrix[i - 1][x]) {
                    cont++;
                }
                if (matrix[i - 1][x - 1]) {
                    cont++;
                }
                if (matrix[i - 1][x + 1]) {
                    cont++;
                }
            }
            if (matrix[i + 1]) {
                if (matrix[i + 1][x]) {
                    cont++;
                }
                if (matrix[i + 1][x - 1]) {
                    cont++;
                }
                if (matrix[i + 1][x + 1]) {
                    cont++;
                }
            }
            if (matrix[i][x - 1]) {
                cont++;
            }
            if (matrix[i][x + 1]) {
                cont++;
            }
            arrRow.push(cont);
        }

        result.push(arrRow);
    }

    return result;
}

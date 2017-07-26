function differentSquares(matrix) {

    var rows = matrix.length;
    var cols = matrix[0].length;

    var result = [];

    if (rows < 2 || cols < 2) {
        return 0;
    }

    for (var i = 0; i < rows - 1; i++) {
        for (var x = 0; x < cols - 1; x++) {
            result.push(`${matrix[i][x]}${matrix[i][x + 1]}${matrix[i + 1][x]}${matrix[i + 1][x + 1]}`);
        }
    }
    return new Set(result).size;
}
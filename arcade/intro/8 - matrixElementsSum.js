function matrixElementsSum(matrix) {

    var rows = matrix.length;
    var cols = matrix[0].length;
    var total = 0;

    for (var x = 0; x < cols; x++) {

        for (var current = 0; current < rows; current++) {

            if (matrix[current][x] === 0) {
                break;
            }
            else {
                total += matrix[current][x];
            }

        }

    }

    return total;
}
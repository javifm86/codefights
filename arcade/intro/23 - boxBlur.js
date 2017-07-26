function boxBlur(image) {

    var columns = image[0].length;
    var rows = image.length;
    var final = [];

    for (var i = 0; i < rows; i++) {
        var rowArray = [];
        for (var x = 0; x < columns; x++) {
            if (i !== 0 && i < (rows - 1) && x !== 0 && x < columns - 1) {
                rowArray.push(processPixel(i, x));
            }

        }
        rowArray.length && final.push(rowArray);
    }

    return final;

    function processPixel(row, col) {
        return Math.floor(
            (image[row - 1][col - 1] + image[row - 1][col] + image[row - 1][col + 1] +
                image[row][col - 1] + image[row][col] + image[row][col + 1] +
                image[row + 1][col - 1] + image[row + 1][col] + image[row + 1][col + 1]) / 9);
    }

}

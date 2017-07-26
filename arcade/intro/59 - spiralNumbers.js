function spiralNumbers(n) {

    var result = [];
    var total = n * n;
    var moveRight = true;
    var moveLeft = false;
    var moveUp = false;
    var moveDown = false;
    var row = 0;
    var col = 0;

    for (var i = 0; i < n; i++) {
        result.push(new Array(n).fill(0));
    }

    result[0][0] = 1;

    for (var x = 1; x < total; x++) {

        if (moveRight && (result[row][col + 1] == null || result[row][col + 1] !== 0)) {
            moveRight = false;
            moveDown = true;
        }

        if (moveDown && (result[row + 1] == null || result[row + 1][col] !== 0)) {
            moveDown = false;
            moveLeft = true;
        }

        if (moveLeft && (result[row][col - 1] == null || result[row][col - 1] !== 0)) {
            moveLeft = false;
            moveUp = true;
        }

        if (moveUp && (result[row - 1] == null || result[row - 1][col] !== 0)) {
            moveUp = false;
            moveRight = true;
        }

        if (moveRight)
            col++;
        else if (moveUp)
            row--;
        else if (moveDown)
            row++;
        else if (moveLeft)
            col--;

        result[row][col] = x + 1;

    }

    return result;
}

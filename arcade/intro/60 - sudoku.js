function sudoku(grid) {

    for (var i = 0; i < 9; i++) {
        var colArr = [];
        if (!correct(grid[i])) {
            return false;
        }

        for (var x = 0; x < 9; x++) {
            colArr.push(grid[x][i]);

            if (i % 3 === 0 && x % 3 === 0) {
                var row = i;
                var col = x;
                var square = [];
                for (var cont = 0; cont < 3; cont++) {
                    square.push(grid[col + cont][row]);
                    square.push(grid[col + cont][row + 1]);
                    square.push(grid[col + cont][row + 2]);
                }
                if (!correct(square)) {
                    return false;
                }
            }

        }
        if (!correct(colArr)) {
            return false;
        }

    }

    return true;
    ///////////////////////////

    function correct(arr) {
        var correctArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        arr = [...arr].sort((a, b) => a - b);

        if (arr.every((v, i) => v === correctArr[i])) {
            return true;
        }
        return false;
    }

}
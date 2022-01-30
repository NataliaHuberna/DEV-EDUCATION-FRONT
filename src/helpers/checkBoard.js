const checkVertical = (desk) => {
    const board = desk.reverse();
    let winner;
    board.forEach((row, rowIndex) => {
        if (rowIndex > 2) {
            row.forEach((cell, cellIndex) => {
                if (cell) {
                    if (
                        cell === board[rowIndex - 1][cellIndex] &&
                        cell === board[rowIndex - 2][cellIndex] &&
                        cell === board[rowIndex - 3][cellIndex]
                    )
                        winner = cell;
                }
            });
        }
    });

    board.reverse();

    return winner ? winner : false;
};

const checkHorizontal = (desk) => {
    const board = desk.reverse();
    let winner;
    board.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            if (cell && cellIndex < 4) {
                if (
                    cell === board[rowIndex][cellIndex + 1] &&
                    cell === board[rowIndex][cellIndex + 2] &&
                    cell === board[rowIndex][cellIndex + 3]
                )
                    winner = cell;
            }
        });
    });

    board.reverse();

    return winner ? winner : false;
};

const checkDiagonalRight = (board) => {
    for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
                if (
                    board[r][c] === board[r - 1][c + 1] &&
                    board[r][c] === board[r - 2][c + 2] &&
                    board[r][c] === board[r - 3][c + 3]
                ) {
                    return board[r][c];
                }
            }
        }
    }
};

const checkDiagonalLeft = (board) => {
    for (let r = 3; r < 6; r++) {
        for (let c = 3; c < 7; c++) {
            if (board[r][c]) {
                if (
                    board[r][c] === board[r - 1][c - 1] &&
                    board[r][c] === board[r - 2][c - 2] &&
                    board[r][c] === board[r - 3][c - 3]
                ) {
                    return board[r][c];
                }
            }
        }
    }
};

const checkDraw = (board) => {
    let check= 'draw';
    board.forEach(row => {
        row.forEach(cell => {
            if (cell===null) check = false;
        });
    });

    return check ? check : false;
};

export const checkAll = (board) => {
    return (
        checkVertical(board) ||
        checkDiagonalRight(board) ||
        checkDiagonalLeft(board) ||
        checkHorizontal(board) ||
        checkDraw(board)
    );
};

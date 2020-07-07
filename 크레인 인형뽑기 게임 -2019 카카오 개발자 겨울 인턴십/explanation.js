function solution(board, moves) {
    let bucket = [];
    let count = 0;
    for (let a = 0; a < moves.length; a++) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][moves[a] - 1] !== 0) {
                bucket.push(board[i][moves[a] - 1])
                board[i][moves[a] - 1] = 0;
                break;
            }
        }
    };
    bucket.reduce(function (init, value) {
        if (init[init.length - 1] === value) {
            init.splice(-1, 1);
            count++;
        } else {
            init.push(value);
        }
        return init;
    }, [])
    return count * 2;
};
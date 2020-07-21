/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//TODO (dfs)
const addNextCell = (queue, visited, i, j, rows, cols, board, word, path) => {

    if (i >= 0 && i < rows && j >= 0 && j < cols && word.charAt(path - 1) === board[i][j] && !visited.has(i + "," + j)) {
        queue.unshift([i, j, path]) // (i, j) + path len (chars visited)
        visited.add(i + "," + j)
    }

}
var exist = function (board, word) {
    const rows = board.length
    const cols = board[0].length

    let queue = []
    let visited = new Set()
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            addNextCell(queue, visited, i, j, rows, cols, board, word, 1)

        }
    }

    while (queue.length) {
        let [i, j, path] = queue.pop()


        if (path === word.length) {
            return true
        }


        addNextCell(queue, visited, i + 1, j, rows, cols, board, word, path + 1)
        addNextCell(queue, visited, i, j + 1, rows, cols, board, word, path + 1)
        addNextCell(queue, visited, i, j - 1, rows, cols, board, word, path + 1)
        addNextCell(queue, visited, i - 1, j, rows, cols, board, word, path + 1)


    }

    return false
}

//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))
console.log(exist([["a", "a"]], "aa"))
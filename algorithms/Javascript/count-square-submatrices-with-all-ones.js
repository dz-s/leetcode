/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let count = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 1) {
                if (r > 0 && c > 0) {
                    matrix[r][c] += Math.min(matrix[r-1][c-1], matrix[r-1][c], matrix[r][c-1])
                }
            }
            count += matrix[r][c]
        }
    }
    return count;
};
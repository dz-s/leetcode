//TLE
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    const recc = (i, j) => {
        if (i === m - 1 && j === n - 1) {
            return grid[i][j]
        }
        if (i < m - 1 && j < n - 1) {
            return Math.min(recc(i, j + 1), recc(i + 1, j)) + grid[i][j];
        }
        if (i < m - 1 && j === n - 1) {
            return recc(i + 1, j) + grid[i][j];
        }
        if (i === m - 1 && j < n - 1) {
            return recc(i, j + 1) + grid[i][j];
        }

    }

    if (m === 1 && n === 1) {
        return grid[0][0]
    }
    if (m === 1 && n > 1) {
        return recc(0, 1) + grid[0][0];
    }
    if (m > 1 && n === 1) {
        return recc(1, 0) + grid[0][0];
    }

    return Math.min(recc(0, 1), recc(1, 0)) + grid[0][0];
};

var minPathSumOPT = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array(m).fill(grid[0][0]);
    
    for (let i = 1; i < m; i++)
        dp[i] = dp[i - 1] + grid[i][0];
    
    for (let i = 1; i < n; i++) {
        dp[0] = dp[0] + grid[0][i];
        for (let j = 1; j < m; j++) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + grid[j][i];
        }
    }
    
    return dp[m - 1];
};


console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))

console.log(minPathSum([[0]]))

console.log(minPathSumOPT([[3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3], [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2], [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9], [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7], [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8], [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9], [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1], [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3], [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3], [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8], [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3], [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3], [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3], [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5], [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2], [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0], [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0], [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7]]))
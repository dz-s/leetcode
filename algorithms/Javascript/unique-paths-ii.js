/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const recc = (i, j, n, m, grid, memo) => {

    // if(grid[i][j] === 1){
    //     return 0
    // }
    // if(i === n - 1 && j === m - 1){
    //     return 1;
    // }
    // if(i === n - 1){
    //     return recc(i, j + 1, n , m, grid, memo)
    // }
    // if(j === m - 1){
    //     return recc(i + 1, j, n , m, grid, memo)
    // }
    // return recc(i + 1, j, n , m, grid, memo) + recc(i, j + 1, n , m, grid, memo)
}

var uniquePathsWithObstacles = function (obstacleGrid) {

    let memo = []
    const n = obstacleGrid.length
    const m = obstacleGrid[0].length
    if (n === 1 && m === 1) {
        return obstacleGrid[n - 1][m - 1] === 0 ? 1 : 0
    }
    if (obstacleGrid[0][0]) {
        return 0
    }
    for (let i = n - 1; i >= 0; i--) {
        memo[i] = new Array(m);
    }
    memo[0][0] = 1
    for (let j = 1; j < m; j++) {
        if (obstacleGrid[0][j] === 1) {
            memo[0][j] = 0
            continue
        }
        memo[0][j] = memo[0][j - 1];
    }

    for (let i = 1; i < n; i++) {
        if (obstacleGrid[i][0] === 1) {
            memo[i][0] = 0
            continue
        }
        memo[i][0] = memo[i - 1][0];
    }


    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {

            if (obstacleGrid[i][j] === 1) {
                memo[i][j] = 0
                continue
            }
            memo[i][j] = memo[i][j - 1] + memo[i - 1][j];
            //console.log(memo[i][j], i, j)
        }
    }


    return memo[n - 1][m - 1]
};

console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]))

console.log(uniquePathsWithObstacles([[1, 0]]))
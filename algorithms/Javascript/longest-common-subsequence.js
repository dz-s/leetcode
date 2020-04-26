/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */


const longestCommonSubsequence = (text1, text2) => {

    let n = text1.length
    let m = text2.length

    if (n === 0 || m === 0) {
        return 0
    }
    let memo = [];
    for (let i = 0; i < n; i++) {
        memo[i] = [];
        for (let j = 0; j < m; j++) {
            memo[i][j] = 0
        }
    }
    //first row/col
    memo[0][0] = + (text1[0] === text2[0])
    for (let j = 1; j < m; j++) {
        memo[0][j] = Math.max(+(text1[0] === text2[j]), memo[0][j - 1])
    }
    for (let i = 1; i < n; i++) {
        memo[i][0] = Math.max(+(text1[i] === text2[0]), memo[i - 1][0])
    }

    //main loop
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1], +(text1[i] === text2[j]) + memo[i - 1][j - 1])
        }
    }
    return memo[n - 1][m - 1]
};

console.log(longestCommonSubsequence("oxcpqrsvwf",
    "shmtulqrypy"))
console.log(longestCommonSubsequence("abc",
    "def"))
console.log(longestCommonSubsequence("abcde",
    "ace"))
console.log(longestCommonSubsequence("abc",
    "abc"))
console.log(longestCommonSubsequence("bsbininm",
    "jmjkbkjkv"))
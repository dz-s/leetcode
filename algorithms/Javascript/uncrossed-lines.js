/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

var maxUncrossedLines = function (A, B) {
    let field = [];
    const n = A.length
    const m = B.length

    if(n === 1){
        return B.indexOf(A[0]) !== -1 ? 1: 0
    }
    if(m === 1){
        return A.indexOf(B[0]) !== -1 ? 1: 0
    }

    for (let i = 0; i < n; i++) {
        field[i] = [];
        for (let j = 0; j < m; j++) {
            field[i][j] = A[i] === B[j] ? 1 : 0
        }
    }

    let OPT = []
    for (let i = n - 1; i >= 0; i--) {
        OPT[i] = new Array(m).fill(0);
    }

    OPT[0][0] = field[0][0]
    for (let j = 1; j < m; j++) {

        OPT[0][j] = Math.max(field[0][j], field[0][j - 1])
    }

    for (let i = 1; i < n; i++) {
        OPT[i][0] = Math.max(field[i][0], field[i - 1][0])
    }


    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (field[i][j] === 1) {
                OPT[i][j] = Math.max(1 + OPT[i - 1][j - 1], OPT[i][j - 1], OPT[i - 1][j]);
            } else {
                OPT[i][j] = Math.max(OPT[i - 1][j - 1], OPT[i][j - 1], OPT[i - 1][j]);
            }

        }
    }
    //console.log(field)
    //console.log(OPT)
    return OPT[n - 1][m - 1]

};


console.log(maxUncrossedLines([2], [2, 3, 2, 2]))
console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]))
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]))
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]))
console.log(maxUncrossedLines([4, 1, 2, 5, 1, 5, 3, 4, 1, 5], [3, 1, 1, 3, 2, 5, 2, 4, 1, 3, 2, 2, 5, 5, 3, 5, 5, 1, 2, 1]))
console.log(maxUncrossedLines([1], [1, 3, 2, 2, 2, 3]))

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
const intervalIntersection = (A, B) => {
    let i = 0, j = 0, ans = [];
    while (i < A.length && j < B.length) {
        let x1 = Math.max(A[i][0], B[j][0]), x2 = Math.min(A[i][1], B[j][1])
        
        if (x1 <= x2) { ans.push([x1, x2]); }
        
        if (A[i][1] <= B[j][1]) { i++; }
        else { j++; }
    }
    return ans;
};
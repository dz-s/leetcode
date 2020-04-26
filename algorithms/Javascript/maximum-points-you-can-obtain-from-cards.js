/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
//by https://leetcode.com/claytonjwong/
let maxScore = (A, K) => {
    let N = A.length;
    let sum = A.slice(N - K, N).reduce((a, b) => a + b),
        max = sum;
    for (let i = 0, j = N - K; K--; max = Math.max(max, sum += A[i++] - A[j++]));
    return max;
}
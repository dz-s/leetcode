/**
 * @param {number[][]} pairs
 * @return {number}
 */

 //TODO: Add memoization
 
const findLongestChainRecc = (pairs, last) => {
    const len = pairs.length
    let paths = []
    for (let i = 0; i < len; i++) {
        if (pairs[i][0] > last[1]) {
            let res = findLongestChainRecc(pairs.filter((el, idx) => idx != i), pairs[i])
            paths.push(res)
        }
    }
    return 1 + Math.max(0, ...paths)
}

const findLongestChain = (pairs) => {
    let paths = []
    for (let i = 0; i < pairs.length; i++) {
        paths.push(findLongestChainRecc(pairs.filter((el, idx) => idx != i), pairs[i]))
    }
    return Math.max(0, ...paths)
};

console.log(findLongestChain([[3, 4], [2, 3], [1, 2]]))
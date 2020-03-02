/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
const modulo = Math.pow(10, 9) + 7
let memo = {}
var numRollsToTarget = function(d, f, target) {
      if (d == 0 && target == 0) {
        return 1
    }
    if (d == 0 || target == 0) {
        return 0
    }
    if (d + ',' + target in memo){
        return memo[d + ',' + target]
    }
    let ways = 0

    for (let i = 1; i < f + 1; i++) {
        if (target >= i) {
            ways = (ways + numRollsToTarget(d - 1, f, target - i)) % modulo
        } else {
            break
        }
    }
    memo[d + ',' + target] = ways
    return ways
};

console.log(numRollsToTarget(2, 5, 10));
/**
 * @param {number} num
 * @return {boolean}
 */
//by https://leetcode.com/eliasylee/
const isPerfectSquare = num => {
    let low = 0
    let high = Math.round(num / 2)
    
    while (low !== high) {
        const square = Math.pow((low + high) / 2, 2)
        
        if (square > num) {
            high = Math.floor((low + high) / 2)
        } else {
            low = Math.round((low + high) / 2)
        }
    }
    
    return Math.pow(low, 2) === num
}

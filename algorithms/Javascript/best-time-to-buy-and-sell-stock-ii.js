/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    const len = prices.length
    let first = 0
    let second = 0
    let profit = 0
    for (let i = 0; i < len - 1; i++) {
        first = prices[i]
        second = prices[i + 1]
        second > first ? profit += second - first : null

    }
    return profit
};

console.log(maxProfit([1, 2, 3, 4, 5]))
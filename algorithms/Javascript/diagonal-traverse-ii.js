/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
    let mapBySumIdx = {}
    let n = nums.length
    for (let i = 0; i < n; i++) {
        let jLimit = nums[i].length
        for (let j = 0; j < jLimit; j++) {
            if (mapBySumIdx[i + j]) {
                mapBySumIdx[i + j].push(nums[i][j])
            } else {
                mapBySumIdx[i + j] = [nums[i][j]]
            }
        }
    }
    let ansArr = []
    Object.keys(mapBySumIdx).map(k => ansArr.push(...(mapBySumIdx[k].reverse())))
    return ansArr
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(findDiagonalOrder([[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]))
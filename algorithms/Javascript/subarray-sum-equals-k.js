/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    const len = nums.length
    let count = 0
    let sums = []
    sums[0] = nums[0]
    for (let i = 1; i < len; i++) {
        sums[i] = sums[i - 1] + nums[i]
    }
    for (let i = 0; i < len; i++) {
        if (sums[i] === k) {
            count++
        }
        for (let j = 0; j < i; j++) {

            if ((sums[i] - sums[j]) === k) {
                count++
            }
        }
    }
    return count
};

console.log(subarraySum([-1, -1, 1], 0))
console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 1, 2, 1], 3))
console.log(subarraySum([1], 0))
console.log(subarraySum([-1, -1, 1], 2))

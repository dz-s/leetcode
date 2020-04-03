/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let maxSum = nums[0]
    let maxEnds = nums[0]
    const len = nums.length
    for (let i = 1; i < len; i++) {
        maxEnds = Math.max(maxEnds + nums[i], nums[i]);
        maxSum = Math.max(maxSum, maxEnds);
    }

    return maxSum
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
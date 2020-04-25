/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isRunning = false;
const canJumpRecc = (next, nums, memo) => {
    if (memo[next] === undefined && !isRunning) {
        if (next >= nums.length - 1) {
            isRunning = true
            return true
        }
        if (nums[next] === 0) {
            memo[next] = false;
            return false
        }
        for (let j = 1; j <= nums[next]; j++) {
            canJumpRecc(next + j, nums, memo)
        }
    }

}
const canJump = (nums) => {
    isRunning = false;
    let memo = [];
    if (nums.length === 1) {
        return true
    }
    if (nums[0] === 0) {
        return false
    }
    for (let j = 1; j <= nums[0]; j++) {
        if (!isRunning) {
            canJumpRecc(j, nums, memo)
        }
    }
    return isRunning;
};



console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let firstMin = nums[0];
    let lastMin = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= firstMin) {
            firstMin = nums[i]
        } else if (nums[i] <= lastMin) {
            lastMin = nums[i]
        } else {
            return true
        }


    }

    return false
};

console.log(increasingTriplet([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 3]))
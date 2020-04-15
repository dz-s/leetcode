/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    let ans = []
    let after = 0;
    let before = 0;
    let lastEl = 0;
    const len = nums.length
    ans[0] = nums[0]
    //first cycle left -> right
    for (let i = 1; i < len; i++) {
        ans[i] = nums[i] * ans[i - 1]
    }

    lastEl = ans[len - 2]

    after = nums[len - 1]
    //second cycle right -> left
    for (let j = len - 2; j > 0; j--) {
        console.log(before, after)
        before = ans[j - 1]
        ans[j] = after * before
        after = nums[j] * after

    }

    ans[0] = after
    ans[len - 1] = lastEl

    return ans
};


console.log(productExceptSelf([1, 2, 3, 4]))
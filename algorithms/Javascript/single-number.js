/**
 * @param {number[]} nums
 * @return {number}
 */

//O(n) space
const singleNumber = (nums) => {
    const len = nums.length
    const singleKey = new Map()
    for (let i = 0; i < len; i++) {

        if (singleKey.has(nums[i])) {
            singleKey.delete(nums[i])
        } else {
            singleKey.set(nums[i], true)
        }
    }

    return Array.from(singleKey.keys())[0]
};


const singleNumberXOR = (nums) => {
    let res = 0
    const len = nums.length
    for (let i = 0; i < len; i++) {
        res = res ^ nums[i]
    }

    return res
};

console.log(singleNumberXOR([2, 2, 1]))
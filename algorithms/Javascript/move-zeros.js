/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    const len = nums.length
    if (len > 1) {
        let j = 0;
        for (let i = 0; i < len; i++) {
            if (nums[i] !== 0) {
                if (i !== j) {
                    nums[i] = nums[i] ^ nums[j]
                    nums[j] = nums[j] ^ nums[i]
                    nums[i] = nums[i] ^ nums[j]

                }
                j++

            }

        }
    }

};

let nums = [0, 1]
moveZeroes(nums)
console.log(nums)
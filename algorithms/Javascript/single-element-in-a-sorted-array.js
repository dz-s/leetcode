/**
 * @param {number[]} nums
 * @return {number}
 */

const recc = (begin, end, nums) => {

    if (begin < end) {
        let mid = Math.floor((begin + end) / 2)
        console.log(begin, end, mid)
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid]
        }

        return Math.max(recc(mid + 1, end, nums), recc(begin, mid, nums))
    } else {
        return Number.NEGATIVE_INFINITY
    }

}
var singleNonDuplicate = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    return recc(0, nums.length, nums)
};


console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]))
console.log(singleNonDuplicate([1, 1, 2]))
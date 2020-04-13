/**
 * @param {number[]} nums
 * @return {number}
 */

// const isOneZeroEq = (l, r, arr) => {
//     let count = 0;
//     for (let i = l; i <= r; i++) {
//         if (arr[i] === 0) {
//             count--
//         } else {
//             count++
//         }

//     }
//     return count
// }
// const maxSubArr = (x, arr) => {

//     const len = arr.length
//     for (let i = 0; i + x - 1 < len; i++) {
//         if (isOneZeroEq(i, i + x - 1, arr) === 0) {
//             return x;
//         }
//     }

//     return -1
// }
// const findMaxLength = (nums) => {
//     let len = nums.length

//     if (nums.length === 2) {
//         return nums[0] !== nums[1] ? 2 : 0
//     }

//     if (len % 2 !== 0) {
//         // console.log('here')
//         return Math.max(findMaxLength(nums.slice(0, len - 1), nums.slice(1, len)))
//     }

//     let maxLen = 0
//     let mid = len / 2
//     let l = 1
//     let r = len
//     while (l <= r) {
//         if (mid % 2 !== 0) {
//             res = Math.max(maxSubArr(mid - 1, nums), maxSubArr(mid + 1, nums))
//         } else {
//             res = maxSubArr(mid, nums)
//         }

//         if (res !== -1 && res > maxLen) {
//             maxLen = res
//             mid += 2
//             l = mid
//         } else {
//             mid -= 2
//             r = mid
//         }

//     }

//     return maxLen;
// };

const findMaxLength = (nums) => {
    const len = nums.length
    if (len === 2) {
        return nums[0] !== nums[1] ? 2 : 0
    }
    let map = {}
    let count = 0
    let maxLen = 0;
    map[0] = -1
    for (let i = 0; i < len; i++) {
        if (nums[i] === 1) {
            count++
        } else {
            count--
        }
        if (count in map) {
            maxLen = Math.max(maxLen, i - map[count]);
        } else {
            map[count] = i;
        }
    }

    return maxLen

}



console.log(findMaxLength([0, 0, 0, 1, 1, 1, 0]))
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 1, 0]))
console.log(findMaxLength([0, 1, 0, 1]))
console.log(findMaxLength([1, 1, 1]))
console.log(findMaxLength([0, 0, 0]))
console.log(findMaxLength([1, 0, 1]))
console.log(findMaxLength([0, 1]))
console.log(findMaxLength([1, 0]))
console.log(findMaxLength([1, 1]))
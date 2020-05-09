/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    const even = (len1 + len2) % 2 === 0

    if (len1 === 0) {
        return even ? (nums2[Math.floor(len2 / 2)] + nums2[Math.floor(len2 / 2) - 1]) / 2 : nums2[Math.floor(len2 / 2)]
    }

    if (len2 === 0) {
        return even ? (nums1[Math.floor(len1 / 2)] + nums1[Math.floor(len1 / 2) - 1]) / 2 : nums1[Math.floor(len1 / 2)]
    }

    let count = 0

    const medianIdx = Math.floor((len1 + len2) / 2)
    let first, second = 0;
    let median = 0;

    if (!even) {
        while (count <= medianIdx) {
            if (nums1[0] !== undefined && nums2[0] !== undefined) {
                median = Math.min(nums1[0], nums2[0])
                median === nums1[0] ? nums1.shift() : nums2.shift()

            } else {
                if (nums1[0] !== undefined) {
                    median = nums1[0]
                    nums1.shift()
                }
                if (nums2[0] !== undefined) {
                    median = nums2[0]
                    nums2.shift()
                }
            }

            count++
        }
    } else {

        while (count <= medianIdx) {

            if (nums1[0] !== undefined && nums2[0] !== undefined) {
                first = second
                second = Math.min(nums1[0], nums2[0])
                second === nums1[0] ? nums1.shift() : nums2.shift()
                count += 1

            } else {
                if (nums1[0] !== undefined) {
                    first = second
                    second = nums1[0]
                    nums1.shift()
                    count++
                }
                if (nums2[0] !== undefined) {
                    first = second
                    second = nums2[0]
                    nums2.shift()
                    count++
                }
            }
        }

        median = (first + second) / 2

    }

    return median
};


console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([], [2, 3]))
console.log(findMedianSortedArrays([2, 3], []))
console.log(findMedianSortedArrays([2, 3], [0]))
console.log(findMedianSortedArrays([2, 3], [0, 1]))
console.log(findMedianSortedArrays([2, 3, 9], [-1, 0, 1]))
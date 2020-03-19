/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    const len = height.length
    let maxArea = 0
    let candidate = 0
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            candidate = Math.min(height[i], height[j]) * (i - j)
            maxArea = maxArea > candidate ? maxArea : candidate
        }
    }

    return maxArea

};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
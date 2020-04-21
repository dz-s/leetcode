/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    // time : O(n)
    // space : O(1)
    if (height.length === 0) return 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let ans = 0;
    while (left < right) {
        if (height[left] > leftMax) leftMax = height[left];
        if (height[right] > rightMax) rightMax = height[right];
        if (leftMax < rightMax) {
            ans += Math.max(0, leftMax - height[left]);
            left++;
        } else {
            ans += Math.max(0, rightMax - height[right]);
            right--;
        }
    }
    return ans;
};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
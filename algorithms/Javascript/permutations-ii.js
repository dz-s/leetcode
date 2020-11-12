/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//by https://leetcode.com/achandel/
var permuteUnique = function(nums) {
    let result = [], usedElements = Array(nums.length).fill(false);
    
    // sort the array
    nums.sort((b, a) => b - a);
    
    const helper = (current, used) => {
        if(current.length === nums.length) result.push(current.slice());
        else {
            for(let i = 0; i < nums.length; i++){
                // if current number is previously traversed or is a duplicate number then continue
                if((used[i]) || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
                
                used[i] = true;
                current.push(nums[i]);
                helper(current, used);
                used[i] = false;
                current.pop();
            }
        }
    }
    
    helper([], usedElements);
    
    return result;
};
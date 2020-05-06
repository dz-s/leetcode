/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length
    let threshold = Math.floor(len / 2)
    let occurs = new Map()
    let majorElem = nums[0];
    let currCount = 0
    for(let i = 0; i < len; i++){
         majorElem = nums[i]
        if(occurs.has(nums[i])){
           
            currCount = occurs.get(majorElem)
            if(currCount + 1 > threshold){
                break
            }
            occurs.set(majorElem, currCount + 1)
        } else {
             occurs.set(majorElem, 1)
        }
    }
    
    return majorElem  
};

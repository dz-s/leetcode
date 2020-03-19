
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 //TODO: Memoisation
const threeSum = (nums) => {

    let backtrack = []
    let res = []
    let sum = 0

    const isCounted = (backtrack) => {
        const sorted = [...backtrack].sort()
        let counted = false
        res.forEach(track => {
            if (counted) {
                return counted
            }
            counted = JSON.stringify(track.sort()) === JSON.stringify(sorted)
        })

        return counted
    }
    const recc = (begin, end) => {
        
        if (backtrack.length === 3) { 
            sum = backtrack.reduce((a, b) => a + b, 0)
            if (sum === 0) {
                if (!isCounted(backtrack)) {
                    res.push([].concat(backtrack))
                }
            }
        } else {
            for (let i = begin; i < end; i++) {
                backtrack.push(nums[i])
                recc(i + 1, end)
                backtrack.pop()
            }
        }

    }

    recc(0, nums.length)

    return res

};

console.log(threeSum([5,-9,-11,9,9,-4,14,10,-11,1,-13,11,10,14,-3,-3,-4,6,-15,6,6,-13,7,-11,-15,10,-8,13,-14,-12,12,6,-6,8,0,10,-11,-8,-2,-6,8,0,12,3,-9,-6,8,3,-15,0,-6,-1,3,9,-5,-5,4,2,-15,-3,5,13,-11,7,6,-4,2,11,-5,7,12,-11,-15,1,-1,-9,10,-8,1,2,8,11,-14,-4,-3,-12,-2,8,5,-1,-9,-4,-3,-13,-12,-12,-10,-3,6,1,12,3,-3,12,11,11,10]))
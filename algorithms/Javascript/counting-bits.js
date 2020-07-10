/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let ans = []
    for(let i = 0; i <= num; i++){
        ans.push(i.toString(2).split("").reduce((prev, curr) => curr == '1' ? prev + 1 : prev , 0))
    }
    return ans
};

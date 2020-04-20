/**
 * @param {number[]} nums
 * @return {string}
 */

const comparator = (a, b) => {
    a = a + ''
    b = b + ''
    return (a + b) > (b + a) ? -1 : 1;
}
const largestNumber = (nums) => {
    if(nums.length === 0){
        return '0'
    }
    let str = nums.sort(comparator).join('');
    return str[0] === 0 ? '0' : str
};
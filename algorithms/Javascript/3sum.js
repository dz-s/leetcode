
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//TODO: Memoisation
const threeSum = (nums) => {

    let map = {}
    const len = nums.length
    let numsCopy = nums.sort((a, b) => a - b);

    if (len < 3) {
        return []
    }

    const findKPair = (arr, K) => {
        let counted = new Set()
        const len = arr.length
        if (len === 2) {
            return arr[0] + arr[1] === K ? [[arr[0], arr[1]]] : []
        }
        let arrCopy = [].concat(arr)
        let res = []
        arrCopy.sort((a, b) => a - b);
        let first = 0
        let second = len - 1
        let sum = Number.MIN_SAFE_INTEGER
        while (first <= second - 1) {
            sum = arrCopy[first] + arrCopy[second]
            if (sum === K) {
                if (!counted.has(arrCopy[first]) && !counted.has(arrCopy[second]))
                    res.push([arrCopy[first], arrCopy[second]])
                counted.add(arrCopy[first])
                counted.add(arrCopy[second])
                second--
            }
            if (sum > K) {
                second--
            }
            if (sum < K) {
                first++
            }
        }
        return res
    }

    for (let i = 0; i < len; i++) {
        const el = numsCopy[i]
        if (!(el in map)) {
            if (el <= 0) {
                map[el] = findKPair(numsCopy.filter((el, idx) => idx > i), parseInt(-el))
            }

        }

    }
    let res = []
    for (key in map) {
        if (map[key].length > 0) {
            map[key].forEach(rest => {
                res.push([parseInt(key), ...rest])
            });

        }
    }
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-2, 0, 1, 1, 2]))
console.log(threeSum(
    [0, 0, 0]))
console.log(threeSum(
    [0, 0, 0, 0]))

console.log(threeSum(
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))

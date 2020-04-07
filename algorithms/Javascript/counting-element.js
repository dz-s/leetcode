/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = (arr) => {
    arr.sort((a, b) => a - b)
    const len = arr.length
    let count = 0
    let k = 0
    for (let i = 0; i < len - 1; i++) {

        if (arr[i + 1] === arr[i] + 1) {
            count += k + 1
            k = 0
        } else {
            if (arr[i + 1] === arr[i]) {
                k++
            } else {
                k = 0
            }
        }

    }
    return count
};

console.log(countElements([1, 3, 2, 3, 5, 0]))
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7]))
console.log(countElements([1, 2, 3]))
console.log(countElements([1, 1, 2, 2]))
console.log(countElements([3, 1, 5, 3, 7, 0, 5]))
console.log(countElements([6, 3, 11, 6, 11, 1, 11, 4, 7, 6, 13, 4, 1]))
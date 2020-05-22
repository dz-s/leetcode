/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const overlap = (int1, int2) => {
    return int1[1] >= int2[0] && int2[1] >= int1[0]
}
var merge = function (intervals) {
    if (intervals.length === 0) {
        return []
    }

    const len = intervals.length;


    intervals.sort(function (a, b) {
        return a[0] - b[0];
    })

    let ans = [intervals[0]]
    let k = 1;
    let i = 0
    let elem = []
    while (k < len) {
        if (overlap(ans[i], intervals[k])) {
            elem = ans.pop()
            ans.push([Math.min(elem[0], intervals[k][0]), Math.max(intervals[k][1], elem[1])])
        } else {
            ans.push(intervals[k])
            i++
        }
        k++
    }
    return ans
};


console.log(merge([[1, 4], [0, 2], [3, 5]]))
console.log(merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]]))

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const len = intervals.length
    if (len > 0) {
        let overlaps = [];


        for (let i = 0; i < len; i++) {

            if (newInterval[1] < intervals[i][0] && overlaps.length === 0) {
                intervals.splice(i, 0, newInterval);
                return intervals
            }
            if (newInterval[0] <= intervals[i][1] && newInterval[1] >= intervals[i][0]) {
                overlaps.push(i)
            }
        }

        if (overlaps.length > 0) {
            let start = Math.min(intervals[overlaps[0]][0], newInterval[0]);
            let end = Math.max(intervals[overlaps[overlaps.length - 1]][1], newInterval[1]);
            let merged = false
            let ans = null
            ans = intervals.map((interval, i) => {
                if (overlaps.indexOf(i) === -1) {
                    return interval
                } else {
                    if (!merged) {
                        merged = true
                        return [start, end]
                    } else {
                        return null
                    }
                }
            })

            return ans.filter(el => el)

        } else {
            if (newInterval[0] > intervals[len - 1][1]) {
                intervals.push(newInterval)
            } else {
                intervals.unshift(newInterval)
            }

            return intervals
        }

    } else {
        return [newInterval]
    }
};

console.log(insert([[1, 3], [6, 9]], [2, 5]))

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))

console.log(insert([], [5, 7]))

console.log(insert([[1, 5]], [6, 8]))

console.log(insert([[3, 5], [12, 15]], [6, 6]))
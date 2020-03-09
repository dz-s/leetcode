/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let map = new Map()
    words.forEach(word => {
        map.set(word, map.has(word) ? map.get(word) + 1 : 1)
    });

    map[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }

    let arr = [...map]
    let res = arr.slice(0, arr.length)
    
    let temp = []
    for (let i = res.length - 1; i >= 0; i--) {
        const occ = res[i][1]
        temp[occ] = temp[occ] ? temp[occ].concat([res[i][0]]) : [res[i][0]]
    }
   
    res = []
    res = temp.filter(el => el)
    let ans = []
    for (let i = res.length - 1; i >= 0; i--) {
       ans.push(...res[i].sort())
    }
    return ans.slice(0, k)
};

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],4))
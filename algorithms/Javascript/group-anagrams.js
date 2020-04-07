/**
 * @param {string[]} strs
 * @return {string[][]}
 * https://leetcode.com/problems/group-anagrams/
 */
const groupAnagrams = (strs) => {

    
    const len = strs.length
    const sorted = strs.map(str => str.split('').sort().join(''))
    const map = new Map()
    for (let i = 0; i < len; i++) {
        if (map.has(sorted[i])) {
            map.set(sorted[i], map.get(sorted[i]).concat([strs[i]]))
        } else {
            map.set(sorted[i], [strs[i]])

        }
    }

    return Array.from(map.values())

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
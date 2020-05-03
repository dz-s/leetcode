//by https://leetcode.com/yushi_lu/
var canConstruct = function(ransomNote, magazine) {
    let dict = {}
    magazine.split('').forEach(val => {
        if (!dict.hasOwnProperty(val))
            dict[val] = 1
        else
            dict[val]++
    })
    for (let i = 0; i < ransomNote.length; i++) {
        if (!dict.hasOwnProperty(ransomNote[i]) || --dict[ransomNote[i]] < 0)
            return false
    }
    return true
};
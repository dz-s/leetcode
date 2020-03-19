const lengthOfLongestSubstring = (s) => {

    const rebuild = (arr, idx) => {
        return arr.slice(idx, arr.length)
    }

    if (s.length > 0 && !s.trim()) {
        return 1;
    }
    if (s.length === 1) {
        return 1;
    }
    let charArr = new Array()
    const arr = s.split('')
    const len = arr.length
    let maxLen = 0
    for (let i = 0; i < len; i++) {
        if (charArr.indexOf(arr[i]) === -1) {
            charArr.push(arr[i])
        } else {
            maxLen = Math.max(maxLen, charArr.length)
            charArr = rebuild(charArr, charArr.indexOf(arr[i]) + 1)
            charArr.push(arr[i])
        }
    }

    maxLen = Math.max(maxLen, charArr.length)

    return maxLen
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring(' '))
console.log(lengthOfLongestSubstring('c'))
console.log(lengthOfLongestSubstring('ddfff')) 
console.log(lengthOfLongestSubstring('abccbadsdf')) 
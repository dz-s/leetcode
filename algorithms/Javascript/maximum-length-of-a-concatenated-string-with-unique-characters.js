/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let maxLen = Number.MIN_VALUE;
    let memo = {};
    arr = arr.filter((el) => !hasDuplicates(el))
    maxLen = dfs(arr, "", 0, maxLen, memo);
    return maxLen
};

const dfs = (arr, path, i, maxLen, memo) => {
    const len = arr.length;
    if(memo[path]){
        return memo[path]
    }
    let pathIsUnique = !hasDuplicates(path);
    if(pathIsUnique){
        maxLen = Math.max(path.length, maxLen);
    }
    if (i === len || !pathIsUnique) {
        memo[path] = maxLen;
        return maxLen;
    }

    for (let j = i; j < len; j++) {
        maxLen = dfs(arr, path + arr[j], j + 1 , maxLen, memo);
    }
    memo[path] = maxLen;
    return maxLen
}


const hasDuplicates = (str) => {
    let freq = new Array(26).fill(0)
    const len = str.length
    for(let i = 0; i < len; i++){
        freq[str.charCodeAt(i) - 97]++
    }

    let hasDuplicates = false;
    for(let i = 0; i < 26; i++){
        if(freq[i] > 1){
            hasDuplicates = true
            break
        }
    }

    return hasDuplicates
}
// console.log(maxLength(["un", "iq", "ue"]))
// console.log(maxLength(["cha", "r", "act", "ers"]))
// console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"]))
// console.log(maxLength(["a", "abc", "d", "de", "def"]))
console.log(hasDuplicates("fogdzwz"))
console.log(["mxae","fogdzwz","n","kajp","zatgjcnkcsxagvrzduu","dqyykpciizyf"].filter((el) => !hasDuplicates(el)))

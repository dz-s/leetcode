/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {

    if (S.length === 0 && T.length === 0) {
        return true
    }

    let sArr = []
    let tArr = []
    const tLen = T.length
    const sLen = S.length
    const len = Math.max(tLen, sLen)
    for (let i = 0; i < len; i++) {
        if (i < sLen) {
            if (S[i] === '#') {
                sArr.pop()
            } else {
                sArr.push(S[i])
            }
        }
        if (i < tLen) {
            if (T[i] === '#') {
                tArr.pop()
            } else {
                tArr.push(T[i])
            }
        }
    }
    return tArr.join() === sArr.join()

};

console.log(backspaceCompare("ab#c", "ad#c"))
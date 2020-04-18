/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
    if (!s) return true

    const len = s.length
    let sArr = s.split('')
    let minDiff = 0;
    let maxDiff = 0;

    for (let i = 0; i < len; i++) {


        if (s[i] === '(') {
            minDiff++
            maxDiff++
        }
        else if (s[i] === '*') {
            minDiff--
            maxDiff++
        }
        else {
            minDiff--
            maxDiff--
        }

        if (maxDiff < 0) {
            return minDiff === 0;
        }

        minDiff = Math.max(minDiff, 0);
    }

    return minDiff === 0;

};

console.log(checkValidString(")("))

const MyForeach = (callback) => {

}

const checkValidString = (s) => {
    if (!s) return true

    const len = s.length
    let sArr = s.split('')
    let minDiff = 0;
    let maxDiff = 0;

    for (let i = 0; i < len; i++) {


        if (s[i] === '(') {
            minDiff++
            maxDiff++
        }
        else if (s[i] === '*') {
            minDiff--
            maxDiff++
        }
        else {
            minDiff--
            maxDiff--
        }

        if (maxDiff < 0) {
            return minDiff === 0;
        }

        minDiff = Math.max(minDiff, 0);
    }

    return minDiff === 0;

};
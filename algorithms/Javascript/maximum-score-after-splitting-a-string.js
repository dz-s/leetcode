/**
 * @param {string} s
 * @return {number}
 */
const maxScore = (s) => {
    let len = s.length
    let acc = []
    acc[0] = +(s[0] === '0')
    for (let i = 1; i < len; i++) {
        if (s[i] === '0') {
            acc[i] = acc[i - 1] + 1
        } else {
            acc[i] = acc[i - 1]
        }
    }
    let maxScore = -1
    acc[len - 1] = +(s[len - 1] === '1')

    for (let i = len - 2; i >= 0; i--) {
        if (maxScore < acc[i] + acc[i + 1]) {
            maxScore = acc[i] + acc[i + 1]
        }


        if (s[i] === '1') {

            acc[i] = acc[i + 1] + 1


        } else {
            acc[i] = acc[i + 1]

        }
    }

    return maxScore
};

console.log(maxScore("011101"))
console.log(maxScore("00111"))
console.log(maxScore("1111"))
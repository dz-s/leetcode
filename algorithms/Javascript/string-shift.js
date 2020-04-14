/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = (s, shift) => {
    const len = shift.length;
    let strArr = s.split('')
    let tmp = '';
    let count = 0;

    for (let i = 0; i < len; i++) {
        if (shift[i][0] === 0) {
            count = shift[i][1]
            for (let j = 0; j < count; j++) {
                tmp = strArr.shift();
                strArr.push(tmp)
            }

        } else {
            count = shift[i][1]
            for (let j = 0; j < count; j++) {
                tmp = strArr.pop();
                strArr.unshift(tmp)
            }
        }
    }

    return strArr.join('')
};

const stringShiftUPD = (s, shift) => {
    const len = shift.length;
    let strArr = s.split('')
    let tmp = '';
    let resShift = 0;
    for (let i = 0; i < len; i++) {
        if (shift[i][0] === 0) {
            resShift += shift[i][1]
        } else {
            resShift -= shift[i][1]
        }
    }

    if (resShift > 0) {
        for (let j = 0; j < resShift; j++) {
            tmp = strArr.shift();
            strArr.push(tmp)
        }

    } else {
        for (let j = 0; j < -resShift; j++) {
            tmp = strArr.pop();
            strArr.unshift(tmp)
        }
    }

    return strArr.join('')
};

console.log(stringShift("abcdefg", [[1, 1], [1, 1], [0, 2], [1, 3]]))
console.log(stringShift("abc", [[0, 1], [1, 2]]))

console.log(stringShiftUPD("abcdefg", [[1, 1], [1, 1], [0, 2], [1, 3]]))
console.log(stringShiftUPD("abc", [[0, 1], [1, 2]]))


  
  